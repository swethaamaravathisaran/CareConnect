import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import SignupPage from './Components/SignupPage'; // Assuming you have a SignupPage component
// Assuming you have a LoginPage component
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import AddChild from './Components/AddChild';
import FeaturesPage from './Components/featurespage';
import AboutPage from './Components/AboutPage';
import ContactPage from './Components/ContactPage';
import Growth from './Components/Growth';
import AddGrowth from './Components/AddGrowth';
import Immunization from './Components/Immunization';





export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} /> {/* LandingPage as the first page */}
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element ={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard />}/>
       <Route path="/features" element={<FeaturesPage />}/>
       <Route path="/AddChild" element={<AddChild/>}/>
       <Route path="/about" element={<AboutPage />}/>
       <Route path='/Contact' element={<ContactPage />}/>
       <Route path='/growth' element={<Growth/>}/>
       <Route path='/AddGrowth'element={<AddGrowth/>}/>
       <Route path='/Immunization'element={<Immunization/>}/>

      
       
      
      
      </Routes>
    </BrowserRouter>
  );
}
