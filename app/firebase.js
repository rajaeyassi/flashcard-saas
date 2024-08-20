// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getAnalytics, isSupported } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDX9JkvDu074lHXmkLUp4_xFHXQC18VDYQ",
  authDomain: "flashcardsaas-31079.firebaseapp.com",
  projectId: "flashcardsaas-31079",
  storageBucket: "flashcardsaas-31079.appspot.com",
  messagingSenderId: "416986908463",
  appId: "1:416986908463:web:ddd82110dbcda88b9783da",
  measurementId: "G-NHFF9135JM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app); // Initialize Firebase Auth

// Initialize Firebase Analytics only if supported
let analytics;
if (typeof window !== 'undefined') {
  isSupported().then(supported => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

// Export the initialized app, Firestore, Auth, and Analytics
export { app, db, auth, analytics, onAuthStateChanged };
