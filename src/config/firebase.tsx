import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDCz8jez6HbV-yNM1uAIWUIXLqPGAk07Y8",
  authDomain: "bridgeonix-cad28.firebaseapp.com",
  projectId: "bridgeonix-cad28",
  storageBucket: "bridgeonix-cad28.firebasestorage.app",
  messagingSenderId: "1047826909255",
  appId: "1:1047826909255:web:20896294a2e3b54745c962"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();