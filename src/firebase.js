// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANJa5EQ-T1iO-2wUMCmJTTi4zcPmp64DM",
  authDomain: "krishna-shopping-cart.firebaseapp.com",
  projectId: "krishna-shopping-cart",
  storageBucket: "krishna-shopping-cart.appspot.com",
  messagingSenderId: "436470897030",
  appId: "1:436470897030:web:e2943e66b23a50ae663407",
  measurementId: "G-B1NBXTM0E1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
