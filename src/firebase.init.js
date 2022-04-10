// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCTz1iFoMrarY0pOLbYvPgwOVxhGGtckGo',
  authDomain: 'jikmunn-ema-john-clone.firebaseapp.com',
  projectId: 'jikmunn-ema-john-clone',
  storageBucket: 'jikmunn-ema-john-clone.appspot.com',
  messagingSenderId: '180853695823',
  appId: '1:180853695823:web:f7ea48a848db43d210913a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// export const auth = getAuth(app);

export default auth;
