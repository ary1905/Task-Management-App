import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions/auth';
import Loader from './Loader';
import './CSS/Login/login.css';
import './CSS/PopUp/popup.css';

function Login({ login, isAuthenticated }) {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [loading, setLoading] = useState(false);

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        setLoading(true);

        login(email, password).then((res) => {
            setLoading(false);
            if (!res || res.error) {
                setError('Invalid email or password.');
                setShowPopup(true);
            }
        }).catch(() => {
            setLoading(false);
            setError('An error occurred. Please try again.');
            setShowPopup(true);
        });
    };

    if (isAuthenticated) {
        return <Navigate to="/" />;
    }

    return (
        <div className="loginWrapper">
            {loading && <Loader />}
            <div className={`loginPage ${showPopup ? 'blur' : ''}`}>
                <div className="loginContainer">
                    <div className="loginContent">
                        <div className="loginHead">
                            <div className="loginHead1">
                                <h1 className='headTxt1'>Login to TaskHub</h1>
                                <h5 className='headTxt2'>Empower Your Productivity.</h5>
                            </div>
                        </div>

                        <form onSubmit={onSubmit} className='loginForm'>
                            <div className="loginIp1">
                                <input type="email" id="email" name="email" required className='loginEmail' value={email}
                                    onChange={onChange} placeholder='Email'
                                />
                            </div>
                            <br />
                            <div className="loginIp2">
                                <input type="password" id="password" name="password" required className='loginPass' value={password}
                                    onChange={onChange} placeholder='Password'
                                />
                            </div>
                            <div className="loginBtn my-3">
                                <button className='loginBtn1' type='submit'>Login</button>
                            </div>
                        </form>

                        <div className="loginLink1">
                            <p className='loginSubs'>Don't have an Account?</p>
                            <Link className='loginBtn2' to='/signup'>Sign Up</Link>
                        </div>

                        <div className="loginLink2">
                            <p className='loginSubs'>Forgot Your Password?</p>
                            <Link className='loginBtn2' to='/reset-password'>Reset Your Password</Link>
                        </div>
                    </div>
                </div>
            </div>

            {showPopup && (
                <div id="popup1" className="overlay">
                    <div className="popup">
                        <h2>Login Error</h2>
                        <a className="close" href="/login" onClick={() => setShowPopup(false)}>&times;</a>
                        <div className="content">
                            {error}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
