import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// ------------------------------------------------------------------
// INSTRUCTIONS:
// 1. Go to console.firebase.google.com
// 2. Create a new project "Dhrubotara"
// 3. Enable "Authentication" -> "Sign-in method" -> "Phone"
// 4. Enable "Firestore Database" -> "Create Database"
// 5. Enable "Storage" -> "Get Started"
// 6. Project Settings -> General -> "Your apps" -> Web -> Copy config
// ------------------------------------------------------------------

const firebaseConfig = {
  // Replace these with your actual keys from Firebase Console
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

// Initialize Firebase only if keys exist (prevents crashing during dev/mock mode)
const app = (firebaseConfig.apiKey && getApps().length === 0) 
  ? initializeApp(firebaseConfig) 
  : getApps().length > 0 ? getApp() : undefined;

export const auth = app ? getAuth(app) : undefined;
export const db = app ? getFirestore(app) : undefined;
export const storage = app ? getStorage(app) : undefined;

export const isFirebaseConfigured = !!app;
