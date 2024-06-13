import React from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css'; // Import your CSS file for styling

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container relative h-screen flex justify-center items-center">
      <video autoPlay muted loop className="bg-video absolute inset-0 object-cover w-full h-full z-0">
        <source src="https://videocdn.cdnpk.net/joy/content/video/free/video0456/large_preview/_import_609d171aa16084.74041028.mp4" type="video/mp4" />
      </video>
      <div className="overlay absolute inset-0 bg-white opacity-50 z-10"></div>
      <div className="content relative z-20 container mx-auto px-4 py-8">
        <Link to="/" className="back-button absolute top-4 left-4 text-white text-lg font-semibold">
            Back
        </Link>
        <h1 className="text-4xl font-extrabold text-white mb-12 text-center transform hover:scale-110 transition duration-300">Welcome to CareConnect!</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
          {/* Module 1: Growth Tracker */}
          <Link to="/growth" className="module-container">
            <div className="bg-pink-200 rounded-lg shadow-md p-8 hover:shadow-xl transition duration-300 transform hover:scale-105">
              <h2 className="text-2xl font-semibold  text-gray-800">Growth Tracker !! </h2>
              <p className="text-gray-600 mb-8">Track children's growth, provide percentile charts, and offer personalized insights.</p>
            </div>
          </Link>

          {/* Module 2: Immunization Scheduler */}
          <Link to="/Immunization" className="module-container">
            <div className="bg-pink-200 rounded-lg shadow-md p-8 hover:shadow-xl transition duration-300 transform hover:scale-105">
              <h2 className="text-2xl font-semibold  text-gray-800">Immunization Scheduler  !!</h2>
              <p className="text-gray-600">Maintain vaccination schedules, send reminders, and provide vaccine information.</p>
            </div>
          </Link>

          {/* Module 3: Health Diary */}
          <Link to="/health-diary" className="module-container">
            <div className="bg-pink-200 rounded-lg shadow-md p-8 hover:shadow-xl transition duration-300 transform hover:scale-105">
              <h2 className="text-2xl font-semibold  text-gray-800">Health Diary !!</h2>
              <p className="text-gray-600 mb-8">Keep a digital diary of health events, store records, and share securely.</p>
            </div>
          </Link>

          {/* Module 4: Nutrition Planner */}
          <Link to="/nutrition-planner" className="module-container">
            <div className="bg-pink-200 rounded-lg shadow-md p-8 hover:shadow-xl transition duration-300 transform hover:scale-105">
              <h2 className="text-2xl font-semibold  text-gray-800">Nutrition Planner  !!</h2>
              <p className="text-gray-600 mb-8">Create personalized nutrition plans, offer meal suggestions, and provide tips.</p>
            </div>
          </Link>

          {/* Module 5: Child Safety Tips */}
          <Link to="/child-safety-tips" className="module-container">
            <div className="bg-pink-200 rounded-lg shadow-md p-8 hover:shadow-xl transition duration-300 transform hover:scale-105">
              <h2 className="text-2xl font-semibold  text-gray-800"> Important Child Safety Tips !!</h2>
              <p className="text-gray-600">Offer safety tips to child when they are in home, outdoors, and emergencies.</p>
            </div>
          </Link>

          {/* Module 6: Developmental Activities */}
          <Link to="/developmental-activities" className="module-container">
            <div className="bg-pink-200 rounded-lg shadow-md p-8 hover:shadow-xl transition duration-300 transform hover:scale-105">
              <h2 className="text-2xl font-semibold  text-gray-800">Developmental Activities !!</h2>
              <p className="text-gray-600">Suggest age-appropriate activities and games for children.</p>
            </div>
          </Link>

          {/* Module 7: Parenting Community */}
          <Link to="/parenting-community" className="module-container">
            <div className="bg-pink-200 rounded-lg shadow-md p-8 hover:shadow-xl transition duration-300 transform hover:scale-105">
              <h2 className="text-2xl font-semibold  text-gray-800">Parenting Community !!</h2>
              <p className="text-gray-600">Connect with other parents, share experiences, and seek advice.</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
