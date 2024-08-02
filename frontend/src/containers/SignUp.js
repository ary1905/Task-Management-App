import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup } from '../actions/auth';
import Loader from './Loader';
import './CSS/SignUp/signUp.css';
import './CSS/PopUp/popup.css';

function SignUp({ signup, isAuthenticated }) {
	const [formData, setFormData] = useState({
		first_name: '',
		last_name: '',
		email: '',
		password: '',
		re_password: ''
	});
	const [showPopup, setShowPopup] = useState(false);
	const [popupMessage, setPopupMessage] = useState('');
	const [errorOccur, setErrorOccur] = useState(false);
	const [loading, setLoading] = useState(false);

	const { first_name, last_name, email, password, re_password } = formData;

	const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async e => {
		e.preventDefault();
		if (password !== re_password) {
			setPopupMessage('Passwords do not match.');
			setShowPopup(true);
			setErrorOccur(true);
			return;
		}
		setLoading(true);
		try {
			const response = await signup(first_name, last_name, email, password, re_password);
			if (response.success) {
				setPopupMessage('Please verify your email.');
				setShowPopup(true);
				setErrorOccur(false);
			} else {
				setPopupMessage(
					'Signup failed. Possible reasons include:<ul>' +
					'<li>Invalid email format</li>' +
					'<li>Email Already Registered</li>' +
					'<li>Password too weak</li>' +
					'<li>Password contains Name or Email</li>' +
					'<li>Passwords do not match</li>' +
					'</ul>'
				);
				setShowPopup(true);
				setErrorOccur(true);
			}
		} catch (error) {
			setPopupMessage(
				'An error occurred during signup. Possible reasons include:<ul>' +
				'<li>Network issues</li>' +
				'<li>Server error</li>' +
				'<li>Invalid input</li>' +
				'</ul>'
			);
			setShowPopup(true);
			setErrorOccur(true);
		} finally {
			setLoading(false);
		}
	};

	if (isAuthenticated) {
		return <Navigate to="/" />;
	}

	return (
		<div className='signUpPage'>
			<div className="signUpContainer">
				<div className="signUpContent" style={{ gridArea: 'signUpContent' }}>
					<div className="signUpHead" style={{ gridArea: 'signUpHead' }}>
						<div className="signUpHead1">
							<h1 className='signUpHeadTxt1'>
								Sign Up for TaskHub
							</h1>
							<h5 className='signUpHeadTxt2'>
								Create an Account.
							</h5>
						</div>
					</div>
					<form onSubmit={e => onSubmit(e)} className='my-4' style={{ gridArea: 'signUpIp' }}>
						<div className="signUpIp">
							<input type="text" name='first_name'
								value={first_name} required className='signUpName'
								onChange={e => onChange(e)} placeholder='First Name'
							/>
						</div>
						<br />
						<div className="signUpIp">
							<input type="text" name='last_name'
								value={last_name} required className='signUpName'
								onChange={e => onChange(e)} placeholder='Last Name'
							/>
						</div>
						<br />
						<div className="signUpIp">
							<input type="email" name="email" required className='signUpEmail' value={email}
								onChange={e => onChange(e)} placeholder='Email'
							/>
						</div>
						<br />
						<div className="signUpIp">
							<input type="password" name="password" required className='signUpPass' value={password}
								onChange={e => onChange(e)} placeholder='Password'
							/>
						</div>
						<br />
						<div className="signUpIp">
							<input type="password" name="re_password" required className='signUpRePass' value={re_password}
								onChange={e => onChange(e)} placeholder='Confirm Password'
							/>
						</div>
						<div className="signUpBtn my-3">
							<button className='signUpBtn1' type='submit'>Register</button>
						</div>
					</form>

					<div className="signUpLink1" style={{ gridArea: 'signUpLink1' }}>
						<p className='signUpSubs'>Already have an Account?</p>
						<Link className='signUpBtn2' to='/login'>Login</Link>
					</div>
				</div>
			</div>

			{loading && <Loader />}

			{showPopup && (
				<div id="popup1" className="overlay">
					<div className="popup1">
						{errorOccur
							?
							<h2>Error While Creating Account</h2>
							:
							<h2>Account Created</h2>
						}
						{errorOccur
							?
							<a className="close" href="/signup" onClick={() => setShowPopup(false)}>&times;</a>
							:
							<a className="close" href="/login" onClick={() => setShowPopup(false)}>&times;</a>
						}
						<div className="content" dangerouslySetInnerHTML={{ __html: popupMessage }} />
					</div>
				</div>
			)}
		</div>
	);
}

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { signup })(SignUp);
