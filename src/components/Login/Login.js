import React, { useState } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import {
  // useSendEmailVerification,
  useSignInWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import gButton from '../../images/gButton.jpg';
import fbButton from '../../images/fbButton.png';
import githubButton from '../../images/githubButton.jpg';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import useFirebase from '../../hooks/useFirebase';

const Login = () => {
  // const { userDetail, signInWithGoogle } = useFirebase();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [error, setError] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [signInWithFacebook] = useSignInWithFacebook(auth);
  const [signInWithGithub] = useSignInWithGithub(auth);
  // const [sendEmailVerification, sending] = useSendEmailVerification(auth);

  let from = location.state?.from?.pathname || '/';

  if (user) {
    // Send them back to the page they tried to visit when they were
    // redirected to the login page. Use { replace: true } so we don't create
    // another entry in the history stack for the login page.  This means that
    // when they get to the protected page and click the back button, they
    // won't end up back on the login page, which is also really nice for the
    // user experience.
    navigate(from, { replace: true });
  }

  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordBlur = (e) => {
    setPassword(e.target.value);
  };

  const handleLogInUser = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(email, password);
  };

  const googleSignIn = async () => {
    signInWithGoogle().then(() => {
      navigate(from, { replace: true });
    });
  };

  const fbSignIn = async () => {
    signInWithFacebook().then(() => {
      navigate(from, { replace: true });
    });
  };

  const githubSignIn = async () => {
    signInWithGithub().then(() => {
      navigate(from, { replace: true });
    });
  };

  return (
    <div className="formContainer">
      {/* <p>
        {console.log(userDetail)} {userDetail ? userDetail?.displayName : ''}{' '}
      </p> */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1 className="formTitle">Log In</h1>
          <form onSubmit={handleLogInUser}>
            <div className="inputGroup">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                onBlur={handleEmailBlur}
                required
              />
            </div>
            <div className="inputGroup">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                onBlur={handlePasswordBlur}
                required
              />
            </div>
            <input className="formSubmit" type="submit" value="Log In" />
          </form>
          <p style={{ color: 'red', textAlign: 'center' }}>
            {error ? 'Incorrect email or Password' : ''}
          </p>
          <p className="newAccount">
            New to Ema-John?
            <Link to="/signup" className="formLink">
              &nbsp;Create an account
            </Link>
          </p>
          <div className="orSection">
            <hr />
            <p>or</p>
            <hr />
          </div>
          <div className="socialIcon">
            <img src={gButton} alt="" onClick={googleSignIn} />
            <img src={fbButton} alt="" onClick={fbSignIn} />
            <img src={githubButton} alt="" onClick={githubSignIn} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
