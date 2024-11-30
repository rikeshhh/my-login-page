import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCHe5xDvK78DwofiyiKxJvh-y5o5RcI5lk",
  authDomain: "tribali-e3a80.firebaseapp.com",
  projectId: "tribali-e3a80",
  storageBucket: "tribali-e3a80.firebasestorage.app",
  messagingSenderId: "787827314317",
  appId: "1:787827314317:web:675a584fbe6ddc53911cc4",
  measurementId: "G-Y45V9GP061"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app)
export {app,auth}