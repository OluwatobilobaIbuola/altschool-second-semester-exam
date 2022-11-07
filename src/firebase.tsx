import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyD2Yril5bWcmjehZ5T0FgXkaH1xU3ttUdg",
  authDomain: "altschool-second-semeste-1f37e.firebaseapp.com",
  projectId: "altschool-second-semeste-1f37e",
  storageBucket: "altschool-second-semeste-1f37e.appspot.com",
  messagingSenderId: "514447239869",
  appId: "1:514447239869:web:d08931d551d30cfab465d4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const auth = getAuth();
