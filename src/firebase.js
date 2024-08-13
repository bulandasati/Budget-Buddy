import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDkqA0fiOlwnMN5HH81RoIZv8iL2_lpkO4",
  authDomain: "finance-tracker-eeade.firebaseapp.com",
  projectId: "finance-tracker-eeade",
  storageBucket: "finance-tracker-eeade.appspot.com",
  messagingSenderId: "486387140362",
  appId: "1:486387140362:web:c71f638c22d4666cc1dcf3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };
