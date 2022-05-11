import { fireStore } from "./firebase";
import { doc, setDoc } from "firebase/firestore";

export async function addDocumentWithID(path, id, content) {
  const data = { result: null, error: null };

  try {
    await setDoc(doc(fireStore, path, id), content);
    data.result = true;
  } catch (error) {
    data.error = "Ooops, looks like we couldn't create a user in our database.";
  }
  return data;
}
