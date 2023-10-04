import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_KEY,
//   authDomain: "ytproject-8a89d.firebaseapp.com",
//   projectId: "ytproject-8a89d",
//   storageBucket: "ytproject-8a89d.appspot.com",
//   messagingSenderId: "935989730426",
//   appId: "1:935989730426:web:f22968215c6ba2215d2fc3",
// };

// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);
// export const auth = getAuth();
// export const storage = getStorage(app);



import { getDatabase } from "firebase/database";

const app1 = initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "ytproject-8a89d.firebaseapp.com",
    projectId: "ytproject-8a89d",
    storageBucket: "ytproject-8a89d.appspot.com",
    messagingSenderId: "935989730426",
    appId: "1:935989730426:web:f22968215c6ba2215d2fc3"
});

const app2 = initializeApp({
 apiKey: "AIzaSyC2dE3EeCZf5cydww0e9DdJQdjQrJgXolk",
  authDomain: "fir-tutorial-ac926.firebaseapp.com",
  projectId: "fir-tutorial-ac926",
  storageBucket: "fir-tutorial-ac926.appspot.com",
  messagingSenderId: "410811579573",
  appId: "1:410811579573:web:f705a80eb2ce2e84ccd2fc",
  measurementId: "G-H2QNRDQSQW" 
}, 'app2');

// Get the default database instance for an app1

// const app = initializeApp(firebaseConfig);
export const db = getFirestore(app1);
export const auth = getAuth();
export const storage = getStorage(app1);

// Get a database instance for app2

export const db2 = getFirestore(app2); 