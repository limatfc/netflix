import { uploadFile } from "../../scripts/firebase/cloudStorage";

export async function addImage(file, id, string) {
  const filePath = `${string}/${id}.png`;
  const newURL = await uploadFile(file, filePath);
  return newURL;
}
