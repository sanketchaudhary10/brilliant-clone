import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAw-IETBxVf966RSips_jYw6MqeMdsKkT0",
  authDomain: "brilliant-clone-eb227.firebaseapp.com",
  projectId: "brilliant-clone-eb227",
  storageBucket: "brilliant-clone-eb227.firebasestorage.app",
  messagingSenderId: "889170124753",
  appId: "1:889170124753:web:6a015656796203cfd3caf0",
  measurementId: "G-VTSL7CJBHV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

