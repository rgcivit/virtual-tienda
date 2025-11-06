import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, setPersistence, browserLocalPersistence,signInWithRedirect } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCEhpWqaZvHo_lYij0tO0VrG4i6K1sECXM",
  authDomain: "virtual-tienda.firebaseapp.com",
  projectId: "virtual-tienda",
  storageBucket: "virtual-tienda.appspot.com",
  messagingSenderId: "40999138640",
  appId: "1:40999138640:web:ec021507e1582aa79f2855",
  measurementId: "G-GKRGTCCYV3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

setPersistence(auth, browserLocalPersistence).catch((error) => {
  console.error("Error setting persistence:", error);
});
// en el handler de login (móvil)
const loginWithGoogle = () => {
  signInWithRedirect(auth, provider)
    .catch(err => console.error('Error signInWithRedirect:', err));
};

export { auth, provider };