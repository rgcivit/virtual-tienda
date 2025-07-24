import { auth, provider, signInWithPopup, signInWithRedirect, getRedirectResult } from "../firebase";
import { useEffect } from "react";

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

function LoginButton() {
  const handleLogin = async () => {
    if (isMobile) {
      await signInWithRedirect(auth, provider);
    } else {
      await signInWithPopup(auth, provider);
    }
  };

  // Manejar el resultado del redirect al volver del login en móvil
  useEffect(() => {
    if (isMobile) {
      getRedirectResult(auth)
        .then((result) => {
          // Aquí puedes guardar el usuario o redirigir si lo necesitas
          // Por ejemplo: if (result?.user) setUser(result.user);
        })
        .catch((error) => {
          // Manejo de errores
          console.error("Error en getRedirectResult:", error);
        });
    }
  }, []);

  return (
    <button onClick={handleLogin}>
      Iniciar sesión con Google
    </button>
  );
}

export default LoginButton;