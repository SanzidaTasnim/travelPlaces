import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD_Uz6flBEOAzI8qIcEnH0Vh3X56tzIu3s",
  authDomain: "travel-project-a4ff6.firebaseapp.com",
  projectId: "travel-project-a4ff6",
  storageBucket: "travel-project-a4ff6.appspot.com",
  messagingSenderId: "57573880028",
  appId: "1:57573880028:web:d7b21d111e0b177bae8419"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);