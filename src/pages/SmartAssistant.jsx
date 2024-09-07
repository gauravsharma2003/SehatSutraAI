import React from 'react';

const SmartAssistant = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Smart Assistant</h1>
        <p className="text-lg text-gray-600 mb-8">
          Welcome to the Smart Assistant page! Here, you'll find a range of features and tools to assist you with various tasks.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Features</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Intelligent Task Management</li>
            <li>Voice Commands and Recognition</li>
            <li>Personalized Recommendations</li>
            <li>Integration with Other Services</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SmartAssistant;
