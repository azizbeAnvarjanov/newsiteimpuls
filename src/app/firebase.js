// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { GoogleAuthProvider } from "firebase/auth";

// Firebase configuration using environment variables from .env.local
const firebaseConfig = {
  apiKey: process.env.next_public_firebase_api,
  authDomain: process.env.next_public_firebase_domain,
  projectId: process.env.next_public_firebase_p_id,
  storageBucket: process.env.next_public_firebase_storage_bucket,
  messagingSenderId: process.env.next_public_firebase_messaging_sender_id,
  appId: process.env.next_public_firebase_app_id,
};

// Initialize Firebase with error handling
let app, auth, db, storage, provider;

try {
  console.log("🔧 Initializing Firebase with environment variables...");
  app = initializeApp(firebaseConfig);

  // Initialize services
  auth = getAuth(app);
  db = getFirestore(app);
  storage = getStorage(app);
  provider = new GoogleAuthProvider();

  console.log("✅ Firebase initialized successfully");
} catch (error) {
  console.error("❌ Firebase initialization failed:", error);
  // Provide fallback objects to prevent app crashes
  auth = null;
  db = null;
  storage = null;
  provider = null;
}

export { auth, db, storage, provider };
