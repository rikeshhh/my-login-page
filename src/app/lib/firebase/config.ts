import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth} from 'firebase/auth';

const firebaseConfig = {
  // apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  // authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  // measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
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