import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCscn5afZtFKNmLzk4QTJq0k6QqksfaoZ4",
    authDomain: "netflix-clone-389d1.firebaseapp.com",
    projectId: "netflix-clone-389d1",
    storageBucket: "netflix-clone-389d1.appspot.com",
    messagingSenderId: "410459274162",
    appId: "1:410459274162:web:ffb15239399de6fdd682ab"
  };

  
  const firebaseApp = firebase.initializeApp (firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;
  
  
   