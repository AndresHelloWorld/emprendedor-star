import firebase from "firebase/compat/app";
import "firebase/compat/storage"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBGb1qawcaFhr8LOAhajWQ3JkhjBirltWI",
  authDomain: "andresab-1c58c.firebaseapp.com",
  projectId: "andresab-1c58c",
  storageBucket: "andresab-1c58c.appspot.com",
  messagingSenderId: "197951817477",
  appId: "1:197951817477:web:75af19df0645404367596c"
};
const app = firebase.initializeApp(firebaseConfig);

export default app;
