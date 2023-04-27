import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyC2No1t7ktv6xkzks9DoTr1LRGlCnus45E',
  authDomain: 'video-5942f.firebaseapp.com',
  projectId: 'video-5942f',
  storageBucket: 'video-5942f.appspot.com',
  messagingSenderId: '486818672477',
  appId: '1:486818672477:web:32b4cc74fc114c4cddc2b4',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export default app;
