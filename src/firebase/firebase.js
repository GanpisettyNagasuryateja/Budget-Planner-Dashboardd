// Import Firebase core
import { initializeApp } from "firebase/app";

// Import Authentication
import { getAuth } from "firebase/auth";

// Import Firestore
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfsUaNdpvVx2UOoPYZFLxNanXLIBYaHZU",
  authDomain: "budget-planner-dashboard-f5a57.firebaseapp.com",
  projectId: "budget-planner-dashboard-f5a57",
  storageBucket: "budget-planner-dashboard-f5a57.firebasestorage.app",
  messagingSenderId: "407568023427",
  appId: "1:407568023427:web:40b810d7fa2c2e09f940b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Authentication
export const auth = getAuth(app);

// Firestore
export const db = getFirestore(app);

export default app;