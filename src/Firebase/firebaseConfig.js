import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD2X2kRHc1uF1elArBa5I7M5lSgHo9zI-o",
    authDomain: "auth-e65ad.firebaseapp.com",
    projectId: "auth-e65ad",
    storageBucket: "auth-e65ad.appspot.com",
    messagingSenderId: "989405387255",
    appId: "1:989405387255:web:e882909d5fb519a79236f2",
    measurementId: "G-22L3BSRFWH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
auth.languageCode = 'en'
export default app 