import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBX8dIyHFI8v6efSfRMdfKjT87zizD1qoE",
  authDomain: "cryptoverse-c54a9.firebaseapp.com",
  projectId: "cryptoverse-c54a9",
  storageBucket: "cryptoverse-c54a9.appspot.com",
  messagingSenderId: "191874310466",
  appId: "1:191874310466:web:d67cc7d6f6f0c9174168db"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

export { projectFirestore, projectAuth }