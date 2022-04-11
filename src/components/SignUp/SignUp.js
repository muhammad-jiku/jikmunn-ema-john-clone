import React, { useState } from 'react';
import {
  Link,
  // useLocation,
  useNavigate,
} from 'react-router-dom';
import './SignUp.css';
import {
  useCreateUserWithEmailAndPassword,
  // useSignInWithFacebook,
  // useSignInWithGithub,
  // useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import gButton from '../../images/gButton.jpg';
import fbButton from '../../images/fbButton.png';
import githubButton from '../../images/githubButton.jpg';

const SignUp = () => {
  const navigate = useNavigate();
  // const location = useLocation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth);
  // const [signInWithGoogle] = useSignInWithGoogle(auth);
  // const [signInWithFacebook] = useSignInWithFacebook(auth);
  // const [signInWithGithub] = useSignInWithGithub(auth);

  if (user) {
    navigate('/');
  }

  // let from = location.state?.from?.pathname || '/';

  if (user) {
    // Send them back to the page they tried to visit when they were
    // redirected to the login page. Use { replace: true } so we don't create
    // another entry in the history stack for the login page.  This means that
    // when they get to the protected page and click the back button, they
    // won't end up back on the login page, which is also really nice for the
    // user experience.
    // navigate(from, { replace: true });
  }

  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordBlur = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordBlur = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleCreateUser = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Sorry! your password failed to match');
      return;
    }

    if (password < 6) {
      setError('Password must be 6 letters!');
      return;
    }

    createUserWithEmailAndPassword(email, password);
  };

  // const googleSignIn = () => {
  //   signInWithGoogle().then(() => {
  //     navigate(from, { replace: true });
  //   });
  // };

  // const fbSignIn = () => {
  //   signInWithFacebook().then(() => {
  //     navigate(from, { replace: true });
  //   });
  // };

  // const githubSignIn = () => {
  //   signInWithGithub().then(() => {
  //     navigate(from, { replace: true });
  //   });
  // };

  return (
    <div className="formContainer">
      {loading ? (
        <p>Loading....</p>
      ) : (
        <div>
          <h1 className="formTitle">Sign Up</h1>
          <form onSubmit={handleCreateUser}>
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
            <div className="inputGroup">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                onBlur={handleConfirmPasswordBlur}
                required
              />
            </div>
            <input className="formSubmit" type="submit" value="Sign Up" />
          </form>
          <p style={{ color: 'red' }}>{error}</p>
          <p className="newAccount">
            Already have an account?
            <Link to="/login" className="formLink">
              &nbsp;Log In
            </Link>
          </p>
          <div className="orSection">
            <hr />
            <p>or</p>
            <hr />
          </div>
          <div className="socialIcon">
            <img
              src={gButton}
              alt=""
              // onClick={googleSignIn}
            />
            <img
              src={fbButton}
              alt=""
              // onClick={fbSignIn}
            />

            <img
              src={githubButton}
              alt=""
              // onClick={githubSignIn}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
