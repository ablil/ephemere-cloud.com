import { doc, getDoc, setDoc } from "firebase/firestore";
import {
  getBlob, ref,
  uploadBytes
} from "firebase/storage";
import { firestore, storage } from "./config";

export function generateIdentifier(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function uploadFiles(files, identifier) {
  const promises = [];
  files.forEach((file) =>
    promises.push(uploadBytes(ref(storage, `${identifier}/${file.name}`), file))
  );

  return Promise.all(promises);
}

export function saveMetadata(data) {
  return setDoc(doc(firestore, "metadata", data.identifier), data);
}

export function lookupfile(identifier) {
  return getDoc(doc(firestore, "metadata", identifier));
}

export function downloadFile(path) {
  return getBlob(ref(storage, path));
}
