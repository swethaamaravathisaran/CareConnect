import React from 'react';
import { Link } from 'react-router-dom';
import './features.css'; // Import your CSS file for styling

const FeaturesPage: React.FC = () => {
  return (
    <div className="features-container relative h-screen">
      {/* Background Video */}
      <video autoPlay muted loop className="bg-video absolute inset-0 object-cover w-full h-full z-0">
        <source src="https://videocdn.cdnpk.net/joy/content/video/free/video0456/large_preview/_import_609d171aa16084.74041028.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay */}
      <div className="overlay absolute inset-0 bg-black opacity-50 z-10"></div>
      
      {/* Content */}
      <div className="content relative z-20 container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link to="/" className="back-button absolute top-4 left-4 text-white text-lg font-semibold">
          Back
        </Link>
        
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-white mb-40 text-center transform hover:scale-110 transition duration-300 ml-20 ">Features of CareConnect</h1>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {/* Feature 1: Growth Tracker */}
          <div className="feature-container bg-pink-200 rounded-lg shadow-md p-8 hover:shadow-xl transition duration-300 transform hover:scale-105">
            <h2 className="text-2xl font-semibold text-gray-800">Growth Tracker</h2>
            <p className="text-gray-600">Track children's growth, provide percentile charts, and offer personalized insights.</p>
          </div>

          {/* Feature 2: Immunization Scheduler */}
          <div className="feature-container bg-pink-200 rounded-lg shadow-md p-8 hover:shadow-xl transition duration-300 transform hover:scale-105">
            <h2 className="text-2xl font-semibold text-gray-800">Immunization Scheduler</h2>
            <p className="text-gray-600">Maintain vaccination schedules, send reminders, and provide vaccine information.</p>
          </div>

          {/* Feature 3: Health Diary */}
          <div className="feature-container bg-pink-200 rounded-lg shadow-md p-8 hover:shadow-xl transition duration-300 transform hover:scale-105">
            <h2 className="text-2xl font-semibold text-gray-800">Health Diary</h2>
            <p className="text-gray-600">Keep a digital diary of health events, store records, and share securely.</p>
          </div>

          {/* Feature 4: Nutrition Planner */}
          <div className="feature-container bg-pink-200 rounded-lg shadow-md p-8 hover:shadow-xl transition duration-300 transform hover:scale-105">
            <h2 className="text-2xl font-semibold text-gray-800">Nutrition Planner</h2>
            <p className="text-gray-600">Create personalized nutrition plans, offer meal suggestions, and provide tips.</p>
          </div>

          {/* Feature 5: Child Safety Tips */}
          <div className="feature-container bg-pink-200 rounded-lg shadow-md p-8 hover:shadow-xl transition duration-300 transform hover:scale-105">
            <h2 className="text-2xl font-semibold text-gray-800">Important Child Safety Tips</h2>
            <p className="text-gray-600">Offer safety tips to child when they are at home, outdoors, and during emergencies.</p>
          </div>

          {/* Feature 6: Developmental Activities */}
          <div className="feature-container bg-pink-200 rounded-lg shadow-md p-8 hover:shadow-xl transition duration-300 transform hover:scale-105">
            <h2 className="text-2xl font-semibold text-gray-800">Developmental Activities</h2>
            <p className="text-gray-600">Suggest age-appropriate activities and games for children.</p>
          </div>

          {/* Feature 7: Parenting Community */}
          <div className="feature-container bg-pink-200 rounded-lg shadow-md p-8 hover:shadow-xl transition duration-300 transform hover:scale-105">
            <h2 className="text-2xl font-semibold text-gray-800">Parenting Community</h2>
            <p className="text-gray-600">Connect with other parents, share experiences, and seek advice.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturesPage;
