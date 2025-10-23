// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2UxXexEIt89lg4aRftbDSQiBvPk2bGAY",
  authDomain: "feedu-987ef.firebaseapp.com",
  projectId: "feedu-987ef",
  storageBucket: "feedu-987ef.firebasestorage.app",
  messagingSenderId: "889442088991",
  appId: "1:889442088991:web:127cad5a4bb8e396a47d2a",
  measurementId: "G-XF09HZS7KF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database=getDatabase(app);

export default database;