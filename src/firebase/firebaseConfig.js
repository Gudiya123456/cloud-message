import { initializeApp } from "firebase/app";

import { getMessaging } from "firebase/messaging";

//Firebase Config values imported from .env file
const firebaseConfig = {
  apiKey:"AIzaSyDI39ZTp7U5taaJYG7puE7_cqPkgtQVwp4",
  authDomain: "fir-managemnet.firebaseapp.com",
  projectId:"fir-managemnet",
  storageBucket: "fir-managemnet.appspot.com",
  messagingSenderId: "780273625573",
  appId:"1:780273625573:web:3f9e0c95655fdc2d6fa70c",
 
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Messaging service
export const messaging = getMessaging(app);