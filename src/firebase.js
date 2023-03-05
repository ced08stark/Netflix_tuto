// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqmXTkKBEcyR4ub70JdqV2OV8Us78ZbvE",
  authDomain: "netflix-react-tuto.firebaseapp.com",
  projectId: "netflix-react-tuto",
  storageBucket: "netflix-react-tuto.appspot.com",
  messagingSenderId: "970664038838",
  appId: "1:970664038838:web:94ac5ef0204d49e3263117",
  measurementId: "G-LV3NPHF221"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);