// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvyevGSeeTa4CZsh6YfmWWLfrR3TWkdF4",
  authDomain: "portifoliodiogoaguiar.firebaseapp.com",
  projectId: "portifoliodiogoaguiar",
  storageBucket: "portifoliodiogoaguiar.appspot.com",
  messagingSenderId: "342050993533",
  appId: "1:342050993533:web:751d611b81d056a78ec814",
  measurementId: "G-4KXGBY4G9B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);