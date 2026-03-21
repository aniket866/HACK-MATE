import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signOut, 
  onAuthStateChanged, 
  User 
} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Initialization logic
let app;
let auth: any;
let analytics: any = null;

const config = {
  apiKey: (import.meta.env.VITE_FIREBASE_API_KEY as string || '').trim(),
  authDomain: (import.meta.env.VITE_FIREBASE_AUTH_DOMAIN as string || '').trim(),
  projectId: (import.meta.env.VITE_FIREBASE_PROJECT_ID as string || '').trim(),
  storageBucket: (import.meta.env.VITE_FIREBASE_STORAGE_BUCKET as string || '').trim(),
  messagingSenderId: (import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID as string || '').trim(),
  appId: (import.meta.env.VITE_FIREBASE_APP_ID as string || '').trim(),
  measurementId: (import.meta.env.VITE_FIREBASE_MEASUREMENT_ID as string || '').trim()
};

try {
  if (config.apiKey && !config.apiKey.includes('your_api_key')) {
      app = initializeApp(config);
      auth = getAuth(app);
      
      if (typeof window !== 'undefined' && config.measurementId) {
        try {
          analytics = getAnalytics(app);
        } catch (e) {
          console.warn("Analytics initialization failed", e);
        }
      }
  } else {
      console.warn("Firebase: API key is missing. Authentication features will be disabled. Check your environment variables.");
  }
} catch (error: any) {
  console.error("Firebase Initialization Error:", error.message);
}

const googleProvider = new GoogleAuthProvider();

export { 
  app, 
  auth, 
  analytics, 
  googleProvider, 
  signInWithPopup, 
  signOut, 
  onAuthStateChanged 
};
export type { User };
