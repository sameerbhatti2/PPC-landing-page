// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js";
import { getDatabase,  ref, set } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYpGA47XYnALOzfoPGqZwJOgk894NSC4A",
  authDomain: "trida-f97c8.firebaseapp.com",
  databaseURL: "https://trida-f97c8-default-rtdb.firebaseio.com",
  projectId: "trida-f97c8",
  storageBucket: "trida-f97c8.appspot.com",
  messagingSenderId: "1014856116038",
  appId: "1:1014856116038:web:98d2762c865c0515e5e747"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const datbase = getDatabase(app)


function writeUserData(name, email,phone, zip) {
const db = getDatabase();

set(ref(db, 'massages ' + name), {
name: name,
email: email,
phone : phone, 
zip : zip,
});
}


const myForm = document.getElementById('my_form')
myForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    let name = getValue('name');
    let email = getValue('email');
    let phone = getValue('tel');
    let zip = getValue('zip');

    console.log(name, email,phone, zip);
    writeUserData(name, email,phone, zip);

    setTimeout(()=>{
        alert("Your message sent successfully")
    },1000)
    
})


const getValue = (id) =>{
    return document.getElementById(id).value;
}