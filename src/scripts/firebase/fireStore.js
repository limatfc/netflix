import { fireStore } from "./firebase";
import { doc, setDoc } from "firebase/firestore";

export async function addDocumentWithID(path, id, content) {
  await setDoc(doc(fireStore, path, id), content);
}
