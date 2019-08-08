import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCipBbhMtkd5-9260lmUujYYOjz4UIaBrc",
  authDomain: "crown-db-6a50c.firebaseapp.com",
  databaseURL: "https://crown-db-6a50c.firebaseio.com",
  projectId: "crown-db-6a50c",
  storageBucket: "",
  messagingSenderId: "42252970042",
  appId: "1:42252970042:web:5918ba10081b212b"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
