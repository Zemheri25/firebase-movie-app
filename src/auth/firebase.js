import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

//* https://firebase.google.com/docs/auth/web/start
//* https://console.firebase.google.com/ => project settings
const firebaseConfig = {
  apiKey: "AIzaSyDoct-p7ieN7hm2ufhX3-4J8vCU00WZvNg",
  authDomain: "movie-app-b1948.firebaseapp.com",
  projectId: "movie-app-b1948",
  storageBucket: "movie-app-b1948.appspot.com",
  messagingSenderId: "217309491590",
  appId: "1:217309491590:web:09dab3bbd1b9e5abc97c07"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const createUser = async (email, password, navigate) => {
  try {
    let userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    navigate("/");
    console.log(userCredential);
  } catch (err) {
    alert(err.message);
  }
};

export const signIn = async (email, password, navigate) => {
  try {
    let userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    navigate("/");
    console.log(userCredential);
  } catch (err) {
    alert(err.message);
  }
};

export const logOut = () => {
  signOut(auth);
  alert("logged out successfully");
};
