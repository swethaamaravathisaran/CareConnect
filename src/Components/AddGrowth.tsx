import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AddGrowth.css';

const AddGrowth: React.FC = () => {
  const [formData, setFormData] = useState({
    ChildID: 0,
    Date: '',
    Height: '',
    Weight: ''
  });
  const [notification, setNotification] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/newGrowthData/sql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setNotification('Data added successfully');
        setFormData({
          ChildID: 0,
          Date: '',
          Height: '',
          Weight: ''
        });
        setTimeout(() => {
          setNotification(null);
        }, 3000); // Clear notification after 3 seconds
      } else {
        setNotification('Data not added');
      }
    } catch (error: any) {
      setNotification('Error adding data: ' + error.message);
    }
  };

  return (
    <div className='add-growth-page'>
      <video autoPlay loop muted className="bg-video">
        <source src="https://videocdn.cdnpk.net/joy/content/video/free/video0456/large_preview/_import_609d0d8f44ac37.93245856.mp4" type="video/mp4" />
      </video>
      <div className="flex justify-center items-center h-screen">
        <div className="form-wrapper">
          <div className="form-container">
            <h2 className="text-center text-2xl font-bold mb-4">Add Growth Data</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="ChildID" className="block text-sm font-medium text-gray-700">Child ID</label>
                <input type="text" id="ChildID" name="ChildID" value={formData.ChildID} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
              </div>
              <div className="mb-4">
                <label htmlFor="Date" className="block text-sm font-medium text-gray-700">Date</label>
                <input type="date" id="Date" name="Date" value={formData.Date} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
              </div>
              <div className="mb-4">
                <label htmlFor="Height" className="block text-sm font-medium text-gray-700">Height (cm)</label>
                <input type="text" id="Height" name="Height" value={formData.Height} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
              </div>
              <div className="mb-4">
                <label htmlFor="Weight" className="block text-sm font-medium text-gray-700">Weight (kg)</label>
                <input type="text" id="Weight" name="Weight" value={formData.Weight} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
              </div>
              <div className="flex justify-center">
                <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700">Submit</button>
              </div>
            </form>
            <Link to="/growth" className="block text-center mt-4 text-indigo-600 hover:text-indigo-700">Back to Growth Tracker!!</Link>
          </div>
          {notification && <div className="notification">{notification}</div>}
        </div>
      </div>
    </div>
  );
};

export default AddGrowth;
