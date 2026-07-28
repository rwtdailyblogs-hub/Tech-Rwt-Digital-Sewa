// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCVmem2hOxVxN4p98gdqwD_npv1LJXeBys",
  authDomain: "tech-rwt-digital-sewa.firebaseapp.com",
  projectId: "tech-rwt-digital-sewa",
  storageBucket: "tech-rwt-digital-sewa.firebasestorage.app",
  messagingSenderId: "180550527219",
  appId: "1:180550527219:web:8e806952a2f06bd57aef86",
  measurementId: "G-PXXGWLFCQM"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
