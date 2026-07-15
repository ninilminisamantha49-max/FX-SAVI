// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-2Fwsvyl_7mhrQjRKUqMUDuJrFf-nfNc",
  authDomain: "fx-savi.firebaseapp.com",
  projectId: "fx-savi",
  storageBucket: "fx-savi.firebasestorage.app",
  messagingSenderId: "379399741156",
  appId: "1:379399741156:web:de14fa2959b08f635ed6f1",
  measurementId: "G-Y3DP81M76Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
