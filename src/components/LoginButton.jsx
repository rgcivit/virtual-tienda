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

  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if (result && result.user) {
          // Usuario logueado correctamente
          // Aquí puedes guardar el usuario en tu estado global/contexto
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <button onClick={handleLogin}>
      Iniciar sesión con Google
    </button>
  );
}

export default LoginButton;