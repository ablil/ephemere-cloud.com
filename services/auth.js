import { signInAnonymously } from "firebase/auth";
import { auth } from "./config";

export function authenticate() {
  if (!localStorage.getItem("loggedIn")) {
    signInAnonymously(auth)
      .then(() => {
        console.log("logged in anonymously");
        localStorage.setItem("loggedIn", true);
      })
      .catch((err) => {
        console.error("failed to sign in anonymously: ", err.message);
      });
  }
}
