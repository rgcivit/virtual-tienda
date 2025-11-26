// ...existing code...
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  setPersistence,
  browserLocalPersistence,
  signInWithPopup, // Mantener
  signInWithRedirect // Ya no se usa para el fallback
} from "firebase/auth";

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

// ✅ CORRECCIÓN: Usamos solo Popup, que es más estable en muchos entornos.
const loginGoogle = async () => {
  try {
    await signInWithPopup(auth, provider);
  } catch (err) {
    // Captura errores (ej: popup bloqueado o cerrado por el usuario)
    console.error('Error al iniciar sesión con Google:', err);
  }
};

setPersistence(auth, browserLocalPersistence).catch((error) => {
  console.error("Error setting persistence:", error);
});

export { auth, provider, loginGoogle };
// ...existing code...