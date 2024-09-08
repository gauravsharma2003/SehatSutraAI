import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Landing from './components/Landing';
import SmartAssistant from './pages/SmartAssistant';
import AppointmentBooking from './pages/AppointmentBooking';
import PaymentComponent from './components/PaymentComponent'
import NotFound from './pages/NotFound';
import SignInSignUp from './pages/SignInSignUp';
import Dashboard from './pages/Dashboard';
import Layout from './components/Layout'; // Import the Layout component

import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><Landing /></Layout>,
  },
  {
    path: "/smart-assistant",
    element: <Layout><SmartAssistant /></Layout>,
  },
  {
    path: "/appointment-booking",
    element: <Layout><AppointmentBooking /></Layout>,
  },
  {
    path: "/payment", 
    element: <Layout> <PaymentComponent/> </Layout>,
  },
  {
    path: "/sign-in",
    element: <Layout><SignInSignUp /></Layout>,
  },
  {
    path: "/dashboard",
    element: <Layout><Dashboard /></Layout>,
  },
  {
    path: "*",
    element: <Layout><NotFound /></Layout>,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
