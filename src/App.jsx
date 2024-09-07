import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Landing from './components/Landing';
import SmartAssistant from './pages/SmartAssistant';
import AppointmentBooking from './pages/AppointmentBooking';
import NotFound from './pages/NotFound'; 
import SignInSignUp from './pages/SignInSignUp';
import PaymentComponent from './components/PaymentComponent';
import Dashboard from './pages/Dashboard';
import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    children: [
    
      {
        path: "smart-assistant",
        element: <SmartAssistant />,
      },
      {
        path: "appointment-booking",
        element: <AppointmentBooking />,
      },
      {
        path: "appointment",
        element: <PaymentComponent />,
      },
      {
        path: "sign-in",
        element: <SignInSignUp />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;