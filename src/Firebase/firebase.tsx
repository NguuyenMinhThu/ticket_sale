
// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrCMqLitss5WdjygwIY-B-VP6L7HrkaNg",
  authDomain: "duan-4a3dd.firebaseapp.com",
  projectId: "duan-4a3dd",
  storageBucket: "duan-4a3dd.appspot.com",
  messagingSenderId: "1098330717031",
  appId: "1:1098330717031:web:c6dc9d738e76e94fef4dc2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//
export const firestore = firebase.firestore();
export default firebase;