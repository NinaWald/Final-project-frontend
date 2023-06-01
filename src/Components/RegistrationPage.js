import React, { useState } from 'react';
import { API_URL } from '../utils/urls';

const RegistrationPage = () => {
  // States for registration
  const [username, setUserName] = useState('');
  const [useremail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');

  // State for registration status
  const [isRegisteredMember, setIsRegisteredMember] = useState(false);

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Handling the name change
  const handleUserName = (e) => {
    setUserName(e.target.value);
    setSubmitted(false);
  };
  // Handling the email change
  const handleUserEmail = (e) => {
    setUserEmail(e.target.value);
    setSubmitted(false);
  };
  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };
  // Handling the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username === '' || useremail === '' || password === '') {
      setError(true);
    } else {
      try {
        const registerResponse = await fetch(API_URL('register'), {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username,
            email: useremail,
            password
          })
        });
        if (registerResponse.ok) {
          // User registered successfully, now log in
          const loginResponse = await fetch(API_URL('login'), {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email: useremail,
              password
            })
          });

          if (loginResponse.ok) {
            // User logged in successfully
            setSubmitted(true);
            setError(false);
          } else {
            // Error occurred during login
            setError(true);
          }
        } else {
          // Error occurred during registration
          setError(true);
        }
      } catch (er) {
        console.error('Error:', error);
        setErrorMessage('An error occurred. Please try again later.');
      }
    }
  };
  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none'
        }}>
        <h1>User {username} successfully {isRegisteredMember ? 'logged in' : 'registered'}!</h1>
      </div>
    );
  };

  return (
    <div className="form">
      <div>
        <h1>{isRegisteredMember ? 'User Login' : 'User Registration'}</h1>
      </div>

      {/* Calling to the methods */}
      <div className="messages">
        {/* Conditional rendering for error message */}
        {errorMessage && (
          <div className="error">
            <h1>{errorMessage}</h1>
          </div>
        )}
        {successMessage()}
      </div>

      <form className="registration" htmlFor="registration">
        {/* Labels and inputs for form data */}
        <label className="label" htmlFor="nameInput">
          <input
            id="nameInput"
            onChange={handleUserName}
            className="input"
            value={username}
            type="text"
            placeholder="Your name"
            required />
        </label>
        <label className="label" htmlFor="emailInput">
          <input
            id="emailInput"
            onChange={handleUserEmail}
            className="input"
            value={useremail}
            type="email"
            placeholder="E-mail"
            required />
        </label>
        <label className="label" htmlFor="passwordInput">
          <input
            id="passwordInput"
            onChange={handlePassword}
            className="input"
            value={password}
            type="password"
            placeholder="Password"
            required />
        </label>
        <label className="label" htmlFor="registeredMember">
          <input
            id="registeredMember"
            onChange={() => setIsRegisteredMember(!isRegisteredMember)}
            className="input"
            type="checkbox"
            checked={isRegisteredMember} />
          Already a registered member
        </label>
        <button onClick={handleSubmit} className="btn" type="submit">
          {isRegisteredMember ? 'Log In' : 'Register'}
        </button>
      </form>
    </div>
  );
};

export default RegistrationPage;