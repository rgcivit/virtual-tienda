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



  return (
    <button onClick={handleLogin}>
      Iniciar sesión con Google
    </button>
  );
}

export default LoginButton;