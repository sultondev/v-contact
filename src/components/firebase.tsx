import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
interface FirebaseConfigTypes {
  apiKey: string | any;
  authDomain: string | any;
  projectId: string | any;
  storageBucket: string | any;
  messagingSenderId: string | any;
  appId: string | any;
}

const firebaseConfig: FirebaseConfigTypes = {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  apiKey:
    import.meta.env.VITE_APP_FIREBASE_API_KEY ||
    "AIzaSyBFIuqIDLZqUAI8TgHyRinFpj2Cfm9J55Q",
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  authDomain:
    import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN ||
    "v-contacts-4fd1f.firebaseapp.com",
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  projectId: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID || "v-contacts-4fd1f",
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  storageBucket:
    import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET ||
    "v-contacts-4fd1f.appspot.com",
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  messagingSenderId:
    import.meta.env.VITE_APP_FIREBASE_MESSAGING_SENDER_ID || "988096381093",
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  appId:
    import.meta.env.VITE_APP_FIREBASE_APP_ID ||
    "1:988096381093:web:fcf1b49401ff5630b7cd4c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// export const auth = app.auth();

export { db };
