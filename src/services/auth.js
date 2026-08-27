import { auth } from "./firebase";
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut 
} from "firebase/auth";

export async function signupUser(email, password) {
  return await createUserWithEmailAndPassword(auth, email, password);
}

export async function loginUser(email, password) {
  return await signInWithEmailAndPassword(auth, password);
}

export async function logoutUser() {
  return await signOut(auth);
}
