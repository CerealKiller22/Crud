import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyBBUBYUI_adbuX0p7A2MkFyYg_wccGMB3o",
    authDomain: "crud-2863d.firebaseapp.com",
    projectId: "crud-2863d",
    storageBucket: "crud-2863d.appspot.com",
    messagingSenderId: "398185861481",
    appId: "1:398185861481:web:ace6f1d2d422b39ddaadf8"
  };


  export const firebaseapp = firebase.initializeApp(firebaseConfig)   //conectar la base de datos