import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    await fetch('https://localhost:7127/api/account/login', {
      method: 'POST',
      body: JSON.stringify({ username: email, password: password }),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) =>
        data.data === 'Login successful'
          ? navigate('/dashboard')
          : setError('Login failed')
      )
      .catch((error) => console.log(error));
  };

  return (
    <div className="form-container">
      <form action="action_page.php" method="post" onSubmit={handleLogin}>
        <h3 className="login-title">Sign In</h3>
        <hr />
        <div className="form-group">
          <label htmlFor="formUserEmail">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="formPassword">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn-login-right">
          Sign In
        </button>

        <div className="form-group">
          <input id="form-checkbox" type="checkbox" name="remember" />
          <label htmlFor="formRemember">
            <span className="fa fa-check" />
            Remember me
          </label>
        </div>
        <div className="container">
          <button type="button" className="btn-cancel">
            Cancel
          </button>
          <span className="forgot-password">
            {' '}
            Forgot <a href="#">password?</a>
          </span>
        </div>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Login;
