// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBoGeoE4cH__ZsqSCPJnbZUQB-Oeg3lV0s",
    authDomain: "teasmis-598df.firebaseapp.com",
    projectId: "teasmis-598df",
    storageBucket: "teasmis-598df.appspot.com",
    messagingSenderId: "895648488405",
    appId: "1:895648488405:web:7db49552ff6c93db75fb5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
export default app