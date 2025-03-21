import { initializeApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, Auth } from "firebase/auth";
import { FirebaseConfig } from "../../models/FirebaseConfig";


const firebaseConfig: FirebaseConfig = {
  apiKey: process.env.API_KEY!,
  authDomain: process.env.AUTH_DOMAIN!,
  projectId: process.env.PROJECT_ID!,
  storageBucket: process.env.STORAGE_BUCKET!,
  messagingSenderId: process.env.MESSAGING_SENDER_ID!,
  appId: process.env.APP_ID!,
};

const app = initializeApp(firebaseConfig);

const db: Firestore = getFirestore(app);
const storage = getStorage(app);

// const auth: Auth = getAuth(app);

export { db, storage };
// export { db, storage, auth };
