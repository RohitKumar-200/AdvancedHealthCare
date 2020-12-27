import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBxLXXXvBHj3gdpUw5RqQzcasUzRn-tlIc",
  authDomain: "advanced-health-care.firebaseapp.com",
  projectId: "advanced-health-care",
  storageBucket: "advanced-health-care.appspot.com",
  messagingSenderId: "452686727524",
  appId: "1:452686727524:web:7de0866e91ed76a1b45271",
  measurementId: "G-4LF4FS1PSV",
});

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
