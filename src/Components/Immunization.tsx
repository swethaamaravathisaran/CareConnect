import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Immune.css';

export default function Immunization() {
  return (
    <div className="immunization-page">
      <h1 className="page-heading mt-10 text-4xl font-extrabold">Immunization Scheduler !!</h1>
      <video autoPlay loop muted className="bg-video">
        <source src="https://videocdn.cdnpk.net/joy/content/video/free/video0468/large_preview/_import_6166e407585150.45898030.mp4" type="video/mp4" />
      </video>
      <Link to="/dashboard" className="back-button absolute top-4 left-4 text-white text-lg font-semibold bg-white">
            Back
        </Link>
      <div className="container grid grid-cols-1 lg:grid-cols-3 gap-6">
     
        <Link to="/AddGrowth" className="block p-6 rounded-lg shadow-md bg-white hover:bg-gray-100 transition duration-300">
          <h2 className="text-xl font-semibold mb-10">Add New Schedule</h2>
          <p className="text-lg">Add new Immunization Schedule.</p>
        </Link>
        <Link to="/update-data" className="block p-6 rounded-lg shadow-md bg-white hover:bg-gray-100 transition duration-300">
          <h2 className="text-xl font-semibold mb-4">Update Schedule</h2>
          <p className="text-lg">Update your child's Immunization Schedule.</p>
        </Link>
        <Link to="/delete-data" className="block p-6 rounded-lg shadow-md bg-white hover:bg-gray-100 transition duration-300">
          <h2 className="text-xl font-semibold mb-4">Delete Schedule</h2>
          <p className="text-lg">Remove your Child Immunization Schedule.</p>
        </Link>
        <Link to="/retrieve-data" className="block p-6 rounded-lg shadow-md bg-white hover:bg-gray-100 transition duration-300">
          <h2 className="text-xl font-semibold mb-4">Retrieve Schedule</h2>
          <p className="text-lg">View your child's Immunization Schedule.</p>
        </Link>
        
      </div>
    </div>
  );
}
