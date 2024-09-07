import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Landing from './components/Landing';
import SmartAssistant from './pages/SmartAssistant';
import AppointmentBooking from './pages/AppointmentBooking';
import NotFound from './pages/NotFound'; 
import SignInSignUp from './pages/SignInSignUp';
import PaymentComponent from './components/PaymentComponent';
import Dashboard from './components/Dashboard'; // Added the Dashboard component
import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/smart-assistant",
    element: <SmartAssistant />,
  },
  {
    path: "/appointment-booking",
    element: <AppointmentBooking />,
  },
  {
    path: "/appointment",
    element: <PaymentComponent />,
  },
  {
    path: "/sign-in",
    element: <SignInSignUp />,
  },
  {
    path: "/dashboard",   // Added the Dashboard route
    element: <Dashboard />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
