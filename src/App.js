import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';
import Home from './Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blogs from './Blogs';
import Events from './Events';
import Blogdetails from './Blogdetails';
import Footer from './Footer';
import Hello from './pages/Hello';
import { Provider } from 'react-redux';
import store from './redux/store';
import Login from './pages/Login';
import { getToken,onMessage } from "firebase/messaging";
import { messaging } from "./firebase/firebaseConfig";
export default function App() {

  



  async function requestPermission() {
    //requesting permission using Notification API
    const permission = await Notification.requestPermission();

    if (permission === "granted") {
      const token = await getToken(messaging, {
        vapidKey: 'BNURrABdm7w7QaXMSKPIh8Sbx779uB1Mx6dVxs1-19FDmoES2KSMrg_hQ372guwbGG7JpHgPyjDjmsZ1hQ-3n2w',
      });

      //We can send token to server
      console.log("Token generated : ", token);
    } else if (permission === "denied") {
      //notifications are blocked
      alert("You denied for the notification");
    }
  }

  useEffect(() => {
    
  }, []);


  onMessage(messaging, (payload) => {
    console.log(payload.notification)
    console.log('heieieieeiie')
  });
  return (
    <div className='flex flex-col min-h-screen'>
      <Provider store={store} >

      <div>
     heloooooo

    
  <button onClick={()=>{requestPermission()}}>
  button
  </button>
    </div>
      </Provider>
    </div>
  )
}