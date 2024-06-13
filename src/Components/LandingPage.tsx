import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './Landing.css';

export default function LandingPage() {
  return (
    <div className="landing-page flex flex-col items-center justify-center">
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-pink-600 to-pink-600 shadow-md py-6 w-full">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="logo-container">
              <Link to="/" className="logo text-white font-bold text-2xl px-4">CareConnect</Link>
            </div>
            <ul className="flex space-x-4">
              <li><Link to ="/features" className="nav-link text-white hover:text-gray-200">Features</Link></li>
              <li><Link to ="/about" className="nav-link text-white hover:text-gray-200">About</Link></li>
              <li><Link to ="/Contact"className="nav-link text-white hover:text-gray-200">Contact</Link></li>
              <li><Link to="/signup" className="btn-get-started bg-pink text-pink-400 px-4 py-2 rounded-full font-semibold hover:bg-pink-600 hover:text-white transition duration-300">Sign Up</Link></li>
              <li><Link to="/login" className="btn-get-started bg-pink text-pink-400 px-4 py-2 rounded-full font-semibold hover:bg-pink-600 hover:text-white transition duration-300">Login</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-background relative text-center flex flex-col items-center justify-center w-full">
        <div className="video-container absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <video autoPlay muted loop className="w-full md:w-2/3"> {/* Updated width */}
            <source src="https://videocdn.cdnpk.net/joy/content/video/free/video0456/large_preview/_import_609d278b3f6588.22851689.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="container mx-auto px-4">
          <div className="py-60 text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome To CareConnect !</h1>
            <p className="text-lg md:text-2xl mb-8">Empowering parents to provide better care for children.</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-purple-600 feature-background text-white text-center flex flex-col items-center justify-center w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 rounded-lg shadow-md feature-card hover:shadow-lg transition duration-300 bg-pink-500">
              <h3 className="text-xl font-semibold mb-4">Nutrition Planner</h3>
              <p className="text-gray-200">Provide age-appropriate nutrition plans and meal ideas for children, considering their dietary needs and preferences.</p>
            </div>
            {/* Feature 2 */}
            <div className="p-8 rounded-lg shadow-md feature-card hover:shadow-lg transition duration-300 bg-pink-500">
              <h3 className="text-xl font-semibold mb-4">Child Safety Tips</h3>
              <p className="text-gray-200">Offer tips and resources on child safety, including home safety, car seat guidelines, and accident prevention.</p>
            </div>
            {/* Feature 3 */}
            <div className="p-8 rounded-lg shadow-md feature-card hover:shadow-lg transition duration-300 bg-pink-500">
              <h3 className="text-xl font-semibold mb-4">Developmental Activities</h3>
              <p className="text-gray-200">Suggest age-appropriate activities and games to promote cognitive, physical, and social development in children.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-pink-800 text-white py-10 text-center w-full">
        <div className="container mx-auto px-4">
          <p>&copy; 2024 CareConnect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
