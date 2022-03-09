import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBc9MwEscaGtHg5L_cubsdEc6hkMqSJy_k",
  authDomain: "cryptoverse-ecd74.firebaseapp.com",
  projectId: "cryptoverse-ecd74",
  storageBucket: "cryptoverse-ecd74.appspot.com",
  messagingSenderId: "123089436295",
  appId: "1:123089436295:web:0c30ab04e881b9aee68222"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }