import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";





// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDcHkNIhu48rIwgs9NefT8fLXqhllye4wY",
    authDomain: "compassion-kenya-737e1.firebaseapp.com",
    projectId: "compassion-kenya-737e1",
    storageBucket: "compassion-kenya-737e1.appspot.com",
    messagingSenderId: "112918473815",
    appId: "1:112918473815:web:333e0747ac7892f465c712",
    measurementId: "G-5168HRDVZK"
  };








const main = document.getElementById ("main")
const createacc = document.getElementById ("create-acc")

const signupbutton = document.getElementById ("signup")
const returnbtn = document.getElementById ("return-btn") 


signupbutton.addEventListener("click", () => {
    main.style.display = "none"
    createacc.style.display = "block"
});

returnbtn.addEventListener("click",() => {
    main.style.display = "block"
    createacc.style.display = "none"
});

