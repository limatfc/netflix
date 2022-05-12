import { fireStore } from "./firebase";
import {
  doc,
  setDoc,
  getDoc,
  collection,
  getDocs,
  addDoc,
} from "firebase/firestore";
import { onFail } from "../logic/onFail";

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

export async function addDocumentWithNoId(path, content) {
  const data = { id: null, error: null };

  try {
    data.id = await addDoc(collection(fireStore, path), content);
  } catch (error) {
    data.error = onFail(error);
  }

  return data;
}

export async function readDocument(path, id) {
  const data = { result: null, error: null };

  try {
    const documentPath = doc(fireStore, path, id);
    const document = await getDoc(documentPath);

    data.result = document.data();
  } catch (error) {
    data.error = onFail(error);
  }

  return data;
}

export async function getCollection(path) {
  const collectionPath = collection(fireStore, path);
  const snapshot = await getDocs(collectionPath);
  const documents = snapshot.docs.map((item) => {
    return { id: item.id, ...item.data() };
  });

  return documents;
}
