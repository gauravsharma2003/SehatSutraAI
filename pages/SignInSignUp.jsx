import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignInSignUp = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  // Demo credentials
  const demoUser = {
    email: 'demo@example.com',
    password: 'password123',
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (isSignUp) {
      if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
      }

      // Store new user credentials in local storage
      localStorage.setItem('user', JSON.stringify({ email, password }));
      alert('Sign up successful!');
      navigate('/dashboard');
    } else {
      // Retrieve user credentials from local storage
      const storedUser = JSON.parse(localStorage.getItem('user'));

      if (email === demoUser.email && password === demoUser.password) {
        navigate('/dashboard');
      } else if (storedUser && email === storedUser.email && password === storedUser.password) {
        navigate('/dashboard');
      } else {
        alert('Invalid credentials. Please use the demo credentials or sign up.');
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </h1>

        {/* Form Toggle */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setIsSignUp(false)}
            className={`py-2 px-4 rounded-l-lg border ${!isSignUp ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            Sign In
          </button>
          <button
            onClick={() => setIsSignUp(true)}
            className={`py-2 px-4 rounded-r-lg border ${isSignUp ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            Sign Up
          </button>
        </div>

        {/* Sign In / Sign Up Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your password"
              required
            />
          </div>

          {isSignUp && (
            <div>
              <label htmlFor="confirm-password" className="block text-gray-700">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Confirm your password"
                required
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
          >
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          {isSignUp ? 'Already have an account?' : 'Don’t have an account?'}
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-blue-500 ml-1 font-semibold"
          >
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignInSignUp;
