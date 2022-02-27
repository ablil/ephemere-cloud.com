import {
  listAll,
  ref,
  uploadBytes,
  getDownloadURL,
  getMetadata,
} from "firebase/storage";
import { storage, firestore } from "./config";

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

export function listfiles(path) {
  return listAll(ref(storage, path)).then((res) => res.items);
}

export function uploadFile(file, metadata) {
  return uploadBytes(ref(storage, metadata.identifier), file, {
    customMetadata: {
      filename: file.name,
      password: metadata.password || "",
      isSecured: metadata.password?.length > 0,
      ttl: metadata.ttl || 15,
    },
  });
}

export function lookupfile(identifier) {
  return getMetadata(ref(storage, identifier));
}

export function getdownloadUrl(identifier) {
  return getDownloadURL(ref(storage, identifier));
}

export function generateMetadata(paths, password, ttl) {
  const identifier = generateIdentifier(7);

  return {
    identifier,
    isSecured: password && password.length > 0,
    password,
    ttl: ttl || 15,
    paths, 
  };
}
