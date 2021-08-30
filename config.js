
import firebase from 'firebase';
require('@firebase/firestore');

const firebaseConfig = {
    apiKey: "AIzaSyCkJiAT6DN6N87cbJbjFdP4t2-34ee5Zh4",
    authDomain: "wily-2a112.firebaseapp.com",
    projectId: "wily-2a112",
    storageBucket: "wily-2a112.appspot.com",
    messagingSenderId: "470776677699",
    appId: "1:470776677699:web:d9fc41b091b5bf1e049bf6",
    measurementId: "G-WKYH08374J"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export default firebase.firestore();

