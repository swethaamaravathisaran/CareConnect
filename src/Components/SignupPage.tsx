// SignUpPage.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './signup.css';

export default function SignUpPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      Username: username,
      Password: password,
      Email: email,
      FullName: fullName,
      DateOfBirth: dateOfBirth,
      Address: address,
      Phone: phone
    };

    try {
      const response = await fetch('/api/carenewuser/sql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        window.location.href = '/AddChild';
      } else {
        console.error('Signup failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="signup-container">
      <video autoPlay muted loop className="background-video">
        <source src="https://videocdn.cdnpk.net/joy/content/video/free/video0456/large_preview/_import_609ceb0ab2db65.83856541.mp4" type="video/mp4" />
      </video>
      <div className="form-wrapper">
        <h2 className="text-center text-2xl font-bold mb-4 text-gray-800 w-full mt-4">Sign Up</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-column">
              <label htmlFor="username">Username</label>
              <input
                id="username"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-column">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-column">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-column">
              <label htmlFor="fullname">Full Name</label>
              <input
                id="fullname"
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-column">
              <label htmlFor="dob">Date of Birth</label>
              <input
                id="dob"
                type="date"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                required
              />
            </div>
            <div className="form-column">
              <label htmlFor="address">Address</label>
              <input
                id="address"
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-column">
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                type="tel"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-column">
              <button type="submit">Sign Up</button>
            </div>
          </div>
        </form>
        <div className="form-row text-center hover:background-color to-blue-800">
          <Link to="/">Back</Link>
        </div>
      </div>
    </div>
  );
}
