import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../components/CurrentUserContext.js';
import { generateCodeVerifier, generateCodeChallenge } from './pkce';

const clientId = 'ed8a3310d0694a2fb9475fc8971627f0';
const redirectUri = 'https://localhost:3000/callback';
const scopes = 'user-read-private user-read-email';

const Login = () => {
  const { currentUser, loginUser } = useContext(CurrentUserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate('/');
    }
  }, [currentUser, navigate]);

  const handleSpotifyLogin = async () => {
    const verifier = generateCodeVerifier();
    const challenge = await generateCodeChallenge(verifier);
    localStorage.setItem('verifier', verifier);

    const authUrl = `https://accounts.spotify.com/authorize?` +
      new URLSearchParams({
        client_id: clientId,
        response_type: 'code',
        redirect_uri: redirectUri,
        scope: scopes,
        code_challenge_method: 'S256',
        code_challenge: challenge,
      });

    window.location.href = authUrl;
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await response.json();
      if (response.ok && data.token) {
        loginUser(data.user);
        localStorage.setItem('token', data.token);
        navigate('/'); 
      } else {
        setError('Login failed: ' + (data.message || 'Unknown error'));
      }
    } catch (error) {
      setError('Login error: ' + error.message);
    }
  };

  return (
    <div id="login-container">
      {console.log({currentUser})}
      <div id="form-circle-left"></div>
      <div id="form-container">
        <h1>Login</h1>

        <div>
          <h3>Login with Spotify</h3>
          <button onClick={handleSpotifyLogin}>Connect with Spotify</button>
        </div>

        <div>
          <h3>Or Login with Email</h3>
          <input
            placeholder="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            placeholder="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <div id="forgot-password">
            <a href="/resetPassword">forgot password?</a>
          </div>
          <br />
          <button id="login-button" type="button" onClick={handleLogin}>
            Login
          </button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
