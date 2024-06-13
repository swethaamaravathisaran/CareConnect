// AboutPage.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './about.css'; // Import your CSS file for styling

const AboutPage = () => {
  return (
    
    <div className="about-container">
       <Link to="/" className="back-button ml-4 mt-4">
    Back
      </Link>
      <video autoPlay muted loop className="bg-video">
        <source src="https://videocdn.cdnpk.net/joy/content/video/free/video0456/large_preview/_import_609d171aa16084.74041028.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
     
      <div className="content">
        
        <div className="about-content">
          <h1 className="about-heading ml-40">About Care Connect</h1>
          <p className="about-text">
            Care Connect is a comprehensive platform designed to help parents and caregivers track and manage various aspects of their children's health and well-being. Our mission is to provide tools and resources that empower parents to make informed decisions about their child's health, growth, and development.
          </p>
          <p className="about-text">
            With Care Connect, you can monitor your child's growth, schedule vaccinations, maintain health records, plan nutrition, access safety tips, discover developmental activities, and connect with other parents in the community.
          </p>
          <p className="about-text">
            Our goal is to create a supportive and informative environment where parents can navigate the journey of raising healthy and happy children with confidence.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
