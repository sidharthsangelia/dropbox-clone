import { getApp, getApps, initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAhJFA3RmssxGy7MzoSYX1i5hsN_UpWMjI",
    authDomain: "dropbox-clone-nextjs-332e0.firebaseapp.com",
    projectId: "dropbox-clone-nextjs-332e0",
    storageBucket: "dropbox-clone-nextjs-332e0.firebasestorage.app",
    messagingSenderId: "382163905689",
    appId: "1:382163905689:web:08ca7dd081cc9d3f0c9c08"
  };

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const storage = getStorage(app);
const db = getFirestore(app);

export {db, storage};
