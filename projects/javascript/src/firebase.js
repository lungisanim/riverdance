import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAceFgG5qxnVyUHe6vUpzAMOICj11LHiyw",
  authDomain: "the-forest-theory.firebaseapp.com",
  projectId: "the-forest-theory",
  storageBucket: "the-forest-theory.appspot.com",
  messagingSenderId: "798684767424",
  appId: "1:798684767424:web:cb1e2f38cc99824b0d3925",
  measurementId: "G-0XNMRK0E31"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
