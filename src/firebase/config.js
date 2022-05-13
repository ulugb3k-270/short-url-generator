import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB1xxahnLi44Wur_QV7ntHdHGa7DQ-B2j4",
  authDomain: "shorturl-phototourl.firebaseapp.com",
  projectId: "shorturl-phototourl",
  storageBucket: "shorturl-phototourl.appspot.com",
  messagingSenderId: "113867241635",
  appId: "1:113867241635:web:6260bbad59bb49c89ba716",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage();

export { db, storage };
