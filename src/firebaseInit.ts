import firebase from "firebase/app";
// eslint-disable-next-line import/no-duplicates
import "firebase/auth";
// eslint-disable-next-line import/no-duplicates
import "firebase/firestore";

// eslint-disable-next-line import/no-duplicates
import "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyA3-uYK7PVGvjBOsuf3TDEp-KLal6qEiAI",
  authDomain: "parakeet-twitter.firebaseapp.com",
  projectId: "parakeet-twitter",
  storageBucket: "parakeet-twitter.appspot.com",
  messagingSenderId: "326308357596",
  appId: "1:326308357596:web:d76fff99175612167a9b19",
  measurementId: "G-Z0Q443JSV8",
};
// Initialize Firebase
export default function initFirebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  return firebase;
}
