

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBLFL-Lxb4DZBWLtLU4Mzw49IGbE1M7xkA",
  authDomain: "club-events-tracker.firebaseapp.com",
  projectId: "club-events-tracker",
  storageBucket: "club-events-tracker.firebasestorage.app",
  messagingSenderId: "919187841827",
  appId: "1:919187841827:web:f0eea07aa3d7b6c0bca296",
  measurementId: "G-1MXZZPNLLQ"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);