// src/pages/AppointmentBooking.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import  doctorsData  from '../doctorsData'

const AppointmentBooking = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleBookAppointment = () => {
    navigate('/payment'); // Redirect to payment page
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Book an Appointment</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctorsData.map((doctor, index) => (
          <div key={index} className="border border-gray-300 p-4 rounded-lg shadow-lg">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{doctor.name}</h2>
            <p className="text-gray-600 mb-2">{doctor.qualification}</p>
            <p className="text-gray-600 mb-4">
              {doctor.years_of_experience} years of experience
            </p>
            <div className="mb-4">
              <h3 className="font-semibold">Available Appointments:</h3>
              <ul className="list-disc list-inside text-gray-600">
                {doctor.available_appointments.map((appointment, idx) => (
                  <li key={idx}>
                    {appointment.date} - {appointment.time}
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={handleBookAppointment}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Book Appointment
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppointmentBooking;
