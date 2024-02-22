import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAovX0Yx_szn6Ks5Tl98wN3-ZA7dOxC8_g",
    authDomain: "travelsync-4915a.firebaseapp.com",
    projectId: "travelsync-4915a",
    storageBucket: "travelsync-4915a.appspot.com",
    messagingSenderId: "40252536196",
    appId: "1:40252536196:web:0d7e066100b724e0aa59d1",
    measurementId: "G-ZM53GVHPWV"
  };
  

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
