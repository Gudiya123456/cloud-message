// Scripts for firebase and firebase messaging
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

// Initialize the Firebase app in the service worker
// "Default" Firebase configuration (prevents errors)
const firebaseConfig = {
    apiKey:"AIzaSyDI39ZTp7U5taaJYG7puE7_cqPkgtQVwp4",
    authDomain: "fir-managemnet.firebaseapp.com",
    projectId:"fir-managemnet",
    storageBucket: "fir-managemnet.appspot.com",
    messagingSenderId: "780273625573",
    appId:"1:780273625573:web:3f9e0c95655fdc2d6fa70c",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});