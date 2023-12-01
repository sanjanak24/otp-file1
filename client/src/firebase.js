import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANvWc6NvJAvk194BPp9YZcblSff4ScTGY",
  authDomain: "otp-file1.firebaseapp.com",
  projectId: "otp-file1",
  storageBucket: "otp-file1.appspot.com",
  messagingSenderId: "332819600865",
  appId: "1:332819600865:web:bac5b014120eded84f6ea0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase 