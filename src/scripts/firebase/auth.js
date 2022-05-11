import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { authentication } from "./firebase";
import { onFail } from "../logic/onFail";

export async function createUser(inputedData) {
  const data = { uid: null, error: null };

  try {
    const userCredential = await createUserWithEmailAndPassword(
      authentication,
      inputedData.email,
      inputedData.password
    );
    data.uid = userCredential.user.uid;
  } catch (error) {
    data.error = onFail(error);
  }

  return data;
}

export async function loginUser(inputedData) {
  const userCredential = await signInWithEmailAndPassword(
    authentication,
    inputedData.email,
    inputedData.password
  );

  return userCredential.user.uid;
}
