import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      // If no user is found in localStorage, redirect to Sign In
      navigate('/signin');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/signin');
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome, {user?.name}</h1>
        <p className="text-gray-700 mb-6">You are signed in as {user?.username}</p>
        <button
          onClick={handleLogout}
          className="py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
