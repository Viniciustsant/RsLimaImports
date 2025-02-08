
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC681Yts1X-NwVHWgO3yPKd3VOFOxXyqkg",
  authDomain: "rs-lima-imports.firebaseapp.com",
  projectId: "rs-lima-imports",
  storageBucket: "rs-lima-imports.firebasestorage.app",
  messagingSenderId: "1034437130874",
  appId: "1:1034437130874:web:b14686d34adb41bad659c3",
  measurementId: "G-8HXMFZWWHR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
