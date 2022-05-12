import { cloudStorage } from "./firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export async function uploadFile(file, fileName) {
  const data = { result: null, error: null };
  try {
    const fileReference = ref(cloudStorage, fileName);
    await uploadBytes(fileReference, file);
    data.result = await getDownloadURL(fileReference);
  } catch (error) {
    data.error =
      "Looks like there was an error uploading your images. Please try again later.";
    console.error(error);
  }

  return data;
}
