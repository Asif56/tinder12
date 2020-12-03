import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBU3be_2tiOOfcfFy_Uq1PK-RS2FjlaUG4",
    authDomain: "tinder-23b5e.firebaseapp.com",
    databaseURL: "https://tinder-23b5e.firebaseio.com",
    projectId: "tinder-23b5e",
    storageBucket: "tinder-23b5e.appspot.com",
    messagingSenderId: "383014450699",
    appId: "1:383014450699:web:54c5b5edb13311dd3bb90e",
    measurementId: "G-H0571FTC14"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database=firebaseApp.firestore()
export default database