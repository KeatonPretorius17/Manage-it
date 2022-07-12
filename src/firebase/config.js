import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCjhiwTy11LDySH8BPZuJE2te11Duj2_6c",
  authDomain: "manage-it-b6989.firebaseapp.com",
  projectId: "manage-it-b6989",
  storageBucket: "manage-it-b6989.appspot.com",
  messagingSenderId: "530436629250",
  appId: "1:530436629250:web:28850814e9056eabd6d81b"
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp, projectStorage }