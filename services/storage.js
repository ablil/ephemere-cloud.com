import { doc, getDoc, setDoc } from "firebase/firestore";
import {
  getBlob,
  ref,
  uploadBytes,
  uploadBytesResumable,
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

export function uploadFile(file, identifier) {
  return uploadBytes(ref(storage, `${identifier}/${file.name}`), file);
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

export function submitform(data) {
  return setDoc(doc(firestore, "form", `${data.email}-${data.subject}`), data);
}
