import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Form.css'

function SignUpForm() {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            await api.signup(userName, email, password);
            navigate('/signup');
        } catch (err) {
            console.error(err.response.data); // Log the exact error from the backend
            setError('Registration failed. Please try again.');
        }
    };

    return (
            <div className="form-container">
                <form onSubmit={handleSignUp}>
                    <h3 className="signup-title">Sign Up</h3>
                    <p className="signup-subtitle">Please fill in this form to create an account.</p>
                    <hr />
                    <div className="form-group">
                        <label htmlFor="formUser"><b>Name</b></label>
                        <input
                            type="text"
                            placeholder="Enter name"
                            name="userName"
                            required
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formEmail"><b>Email</b></label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            name="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formPassword"><b>Password</b></label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            name="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formRepeatPassword"><b>Repeat Password</b></label>
                        <input
                            type="password"
                            placeholder="Repeat Password"
                            name="password-repeat"
                            required
                        />
                    </div>
                    <p>By creating an account you agree to our <a href="#" style={{ color: "dodgerblue" }}>Terms & Privacy</a>.</p>
                    <div className="clearfix">
                        <button type="button" className="btn-cancel">Cancel</button>
                        <button type="submit" className="btn-signup">Sign Up</button>
                    </div>
                </form>
                {error && <p>{error}</p>}
            </div>
    );
}

export default SignUpForm;