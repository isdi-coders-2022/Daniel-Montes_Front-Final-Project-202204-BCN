import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

export const initializeFirebase = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyArGWpvfmz5jBpnuRqM3hvCQr_r0fDhx9Y",
    authDomain: "adoptaunpinguino-69dcf.firebaseapp.com",
    projectId: "adoptaunpinguino-69dcf",
    storageBucket: "adoptaunpinguino-69dcf.appspot.com",
    messagingSenderId: "715282969976",
    appId: "1:715282969976:web:9cbcd8c736529293f3848d",
  };
  const firebaseApp = initializeApp(firebaseConfig);
  const storage = getStorage(firebaseApp); //eslint-disable-line no-unused-vars
};

// Get a reference to the storage service, which is used to create references in your storage bucket
