import { useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from 'firebase/auth';
import auth from '../firebase.init';

const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
  const [userDetail, setUserDetail] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (userInfo) => {
      setUserDetail(userInfo);
    });
  }, []);

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // The signed-in user info.
        const userInfo = result.user;
        setUserDetail(userInfo);
        console.log(userInfo);
      })
      .catch((error) => {
        // Handle Errors here.
        console.log(error);
      });
  };

  return { userDetail, setUserDetail, signInWithGoogle };
};

export default useFirebase;
