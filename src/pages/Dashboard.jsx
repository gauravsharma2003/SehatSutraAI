// src/components/Dashboard.jsx
import React from 'react';

const Dashboard = () => {
  const userInfo = {
    name: 'Parikh Jain',
    age: 27,
    gender: 'Male',
    height: '180 cm',
    weight: '72 kg', // Adjusted to a realistic value
    contactNumber: '12345',
    address: 'Dubai',
    bloodGroup: 'A+',
    allergies: 'No',
  };

  const appointments = [
    { date: '2024-08-15', time: '10:00 AM', doctor: 'Dr. Alice Smith', location: 'Dubai Medical Center', status: 'Completed' },
    { date: '2024-07-30', time: '02:30 PM', doctor: 'Dr. Bob Johnson', location: 'City Health Clinic', status: 'Cancelled' },
    { date: '2024-06-20', time: '09:00 AM', doctor: 'Dr. Sarah Lee', location: 'Health Plus Clinic', status: 'Completed' },
  ];

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Dashboard</h1>
      
      <div className="mb-6 p-4 border border-gray-200 rounded-lg bg-gray-50">
        <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Profile Information</h2>
        <ul className="list-none space-y-2">
          {Object.entries(userInfo).map(([key, value]) => (
            <li key={key} className="text-gray-700">
              <span className="font-semibold capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span> {value}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
        <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Previous Appointments</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-indigo-600 text-white">
              <th className="py-2 px-4 border">Date</th>
              <th className="py-2 px-4 border">Time</th>
              <th className="py-2 px-4 border">Doctor</th>
              <th className="py-2 px-4 border">Location</th>
              <th className="py-2 px-4 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appt, index) => (
              <tr key={index} className="bg-gray-50">
                <td className="py-2 px-4 border">{appt.date}</td>
                <td className="py-2 px-4 border">{appt.time}</td>
                <td className="py-2 px-4 border">{appt.doctor}</td>
                <td className="py-2 px-4 border">{appt.location}</td>
                <td className="py-2 px-4 border">{appt.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;