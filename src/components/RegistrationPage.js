import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { API_URL } from '../utils/urls';
import { loginUser, setDiscount, setUserId, logoutUser } from '../reducers/authReducer';
import { clearCart } from '../reducers/cart';
import LogoutButton from './LogoutButton';
import DeleteUser from './DeleteUser';
import '../registration.css'
import Loading from './Loading';

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.userId)

  const [username, setUserName] = useState('');
  const [useremail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegisteredMember, setIsRegisteredMember] = useState(false);
  const [, setSubmitted] = useState(false);
  // Assigning to an underscore to indicate it's intentionally unused
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setUserName('');
    setUserEmail('');
    setPassword('');
    setSubmitted(false);
    setError(false);
    setErrorMessage('');
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

  const handleLogin = async () => {
    try {
      setLoading(true);
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

        setSubmitted(true);
        setError(false);
        setUserName(responseUsername);

        dispatch(
          loginUser(responseUsername, accessToken, data.response.id)
        );

        dispatch(setDiscount(discount));
        dispatch(clearCart());
        dispatch(setUserId(data.response.id));
      } else {
        setError(true);
        setErrorMessage('Login failed. Please check your credentials and try again.');
      }
    } catch (e) {
      console.error('Error:', error);
      setErrorMessage('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
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

  const handleLogout = () => {
    dispatch(logoutUser());
    setUserName('');
  };

  return (

    <div className="form">
      {isLoading && <Loading />}
      <div>
        <h1>Get 10% discount! Become a member today!</h1>
      </div>

      <div className="messages">
        {errorMessage && (
          <div className="error">
            <h1>{errorMessage}</h1>
          </div>
        )}
        {isLoggedIn !== null ? (
          <div className="success">
            {isLoggedIn ? (
              <>
                <h1>Welcome, {username}!</h1>
                <LogoutButton onLogout={handleLogout} />
                <DeleteUser />
              </>
            ) : (
              <h1>User successfully logged out!</h1>
            )}
          </div>
        ) : null}
      </div>

      <form className="registration" onSubmit={handleSubmit}>
        <div className="regis-content">
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
          <div className="toggle-container">
            <h1>Register/Login</h1>
          </div>
          <label className="toggle-switch-label" htmlFor="registeredMember">
            <div className="toggle-switch-container">
              <input
                id="registeredMember"
                onChange={() => setIsRegisteredMember(!isRegisteredMember)}
                className="toggle-switch-input"
                type="checkbox"
                checked={isRegisteredMember} />
              <span className="toggle-switch-slider" />
              <span className="toggle-switch-text">
                {isRegisteredMember ? 'Log In' : 'Register'}
              </span>
            </div>
          </label>

          <button className="button" type="submit">
            {isRegisteredMember ? 'Submit' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationPage;

/*
  const successMessage = () => {
    if (isLoggedIn) {
      return (
        <div className="success" style={{ display: isLoggedIn ? '' : 'none' }}>
          <h1>Welcome, {username}!</h1>
          <LogoutButton onLogout={handleLogout} />
        </div>
      );
    }
    return null;
  };
*/
