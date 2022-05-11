import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBZBcqplAnEOtTp-xBYBzesyVUL25TVZEs",
  authDomain: "netflix-75b71.firebaseapp.com",
  projectId: "netflix-75b71",
  storageBucket: "netflix-75b71.appspot.com",
  messagingSenderId: "132290930370",
  appId: "1:132290930370:web:e9e9fae659a51e278bbd5b",
};

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const fireStore = getFirestore(app);
