import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { API_URL } from '../utils/urls';
import { loginUser, setDiscount } from '../reducers/authReducer';
import { clearCart } from '../reducers/cart';

const RegistrationPage = () => {
  const [username, setUserName] = useState('');
  const [useremail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegisteredMember, setIsRegisteredMember] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setUserName('');
    setUserEmail('');
    setPassword('');
  }, []);

  const handleUserName = (e) => {
    setUserName(e.target.value);
    setSubmitted(false);
  };

  const handleUserEmail = (e) => {
    setUserEmail(e.target.value);
    setSubmitted(false);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  const handleRegistration = async () => {
    try {
      const registerResponse = await fetch(API_URL('register'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          useremail,
          password
        })
      });

      if (registerResponse.ok) {
        setSubmitted(true);
        setError(false);
      } else {
        setError(true);
        setErrorMessage('Registration failed. Please try again.');
      }
    } catch (e) {
      console.error('Error:', error);
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const loginResponse = await fetch(API_URL('login'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          useremail,
          username,
          password
        })
      });

      if (loginResponse.ok) {
        const data = await loginResponse.json();
        const { username: responseUsername, accessToken, discount } = data.response;

        dispatch(loginUser(responseUsername, accessToken));
        dispatch(setDiscount(discount));
        dispatch(clearCart());

        setSubmitted(true);
        setError(false);
      } else {
        setError(true);
        setErrorMessage('Login failed. Please check your credentials and try again.');
      }
    } catch (e) {
      console.error('Error:', error);
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === '' || useremail === '' || password === '') {
      setError(true);
      setErrorMessage('Please fill in all the fields.');
    } else {
      setError(false);
      setErrorMessage('');
      if (isRegisteredMember) {
        handleLogin();
      } else {
        handleRegistration();
      }
    }
  };

  const successMessage = () => {
    return (
      <div className="success" style={{ display: submitted ? '' : 'none' }}>
        <h1>User {username} successfully {isRegisteredMember ? 'logged in' : 'registered'}!</h1>
      </div>
    );
  };

  return (
    <div className="form">
      <div>
        <h1>{isRegisteredMember ? 'User Login' : 'User Registration'}</h1>
      </div>

      <div className="messages">
        {errorMessage && (
          <div className="error">
            <h1>{errorMessage}</h1>
          </div>
        )}
        {successMessage()}
      </div>

      <form className="registration" onSubmit={handleSubmit}>
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
        <button className="btn" type="submit">
          {isRegisteredMember ? 'Log In' : 'Register'}
        </button>
      </form>
    </div>
  );
};

export default RegistrationPage;
