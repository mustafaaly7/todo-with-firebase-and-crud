 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
 import { getFirestore , collection, addDoc,doc,setDoc,getDocs ,deleteDoc,updateDoc  ,getDoc } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
 import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyAUSqEUgb7zyt9vAEYm3eVYLU0Vz8hrfUY",
   authDomain: "classwork-14-7-2024.firebaseapp.com",
   projectId: "classwork-14-7-2024",
   storageBucket: "classwork-14-7-2024.appspot.com",
   messagingSenderId: "555990634683",
   appId: "1:555990634683:web:3a47f545da9bd6975c599e"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);


export{
    app,
    db , collection, addDoc ,
    auth, createUserWithEmailAndPassword
    ,doc,
    setDoc,
    signInWithEmailAndPassword,getDocs 
    ,deleteDoc ,updateDoc ,getDoc
}










