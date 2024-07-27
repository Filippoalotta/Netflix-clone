// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, addDoc, collection } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtVThRWAlSG2RlxTBEiQj-gLaAnz7z6Sc",
  authDomain: "authentication-demo-5d90c.firebaseapp.com",
  projectId: "authentication-demo-5d90c",
  storageBucket: "authentication-demo-5d90c.appspot.com",
  messagingSenderId: "423861376784",
  appId: "1:423861376784:web:9222bdf80d406a7510f795"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(auth, email, password);
    const user = response.user;
    await addDoc(collection(db, 'user'), {
      uid: user.uid,
      authProvider: 'local',
      email,
    })
  } catch (error) {
    console.log(`Error: ${error}`)
  }
};

const login = async (email, password) => {
  try {
    signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(`Error: ${error}`)
  }
};

const logout = () => {
  signOut(auth);
};

export { auth, db, signup, login, logout};