import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTH_DOMAIN",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_STORAGE_BUCKET",
  messagingSenderId: "TU_MESSAGING_SENDER_ID",
  appId: "TU_APP_ID"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Función mejorada para iniciar sesión con Google
const handleGoogleRegister = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log("Usuario autenticado:", user);

    // Aquí podrías guardar los datos del usuario en tu estado o en una base de datos

  } catch (error) {
    console.error("Error en autenticación:", error);
    
    // Manejo de errores específicos
    if (error.code === "auth/popup-blocked") {
      alert("El navegador bloqueó el inicio de sesión. Intenta permitir ventanas emergentes.");
    } else if (error.code === "auth/cancelled-popup-request") {
      alert("Parece que otra ventana emergente de autenticación se abrió y se cerró.");
    }
  }
};