import { fireStore } from "./firebase";
import {
  doc,
  setDoc,
  getDoc,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
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
    const result = await addDoc(collection(fireStore, path), content);
    data.id = result.id;
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

export async function editDocument(path, documentId, content) {
  const data = { result: null, error: null };
  try {
    const cityRef = doc(fireStore, path, documentId);
    setDoc(cityRef, content, { merge: true });
    data.result = true;
  } catch (error) {
    data.error = "Oops, looks like something went wrong.";
  }
  return data;
}

export async function deleteDocument(path, documentId) {
  const data = { result: null, error: null };
  try {
    await deleteDoc(doc(fireStore, path, documentId));
    data.result = true;
  } catch (error) {
    console.error(error);
    data.error("Ops, looks like there was a problem. Please try again later.");
  }
  return data;
}
