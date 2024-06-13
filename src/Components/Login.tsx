import React, { useState } from 'react';
import './login.css'; // Import your CSS file for styling

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Username: username, Password: password }),
      });
      if (response.ok) {
        // Redirect user after successful login, or perform other actions
        window.location.href = '/dashboard'; // Example: Redirect to dashboard page
      } else {
        // Handle invalid credentials or other errors
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="login-container">
      <video autoPlay muted loop className="background-video">
        <source src="https://videocdn.cdnpk.net/joy/content/video/free/video0482/large_preview/_import_62aad5c5abd6e9.44692960.mp4" type="video/mp4" />
      </video>
      <div className="login-wrapper">
        <h2 className="login-heading text-2xl font-bold text-pretty">Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
}

