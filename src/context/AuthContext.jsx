import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  signOut as firebaseSignOut,
  onAuthStateChanged
} from 'firebase/auth';
import { auth, provider } from '../firebase';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Detección simple de móvil
  const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  const handleGoogleRegister = async () => {
    try {
      if (isMobile) {
        // Más fiable en móviles (evita problemas de popup bloqueado)
        await signInWithRedirect(auth, provider);
      } else {
        const result = await signInWithPopup(auth, provider);
        setUser(result.user);
      }
    } catch (error) {
      console.error('Error en handleGoogleRegister:', error);
    }
  };

  const signOutUser = async () => {
    try {
      await firebaseSignOut(auth);
      setUser(null);
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    // Intentar obtener resultado de redirect (captura errores)
    (async () => {
      try {
        await getRedirectResult(auth);
        // onAuthStateChanged actualizará user; no es estrictamente necesario usar el resultado aquí
      } catch (error) {
        console.error('Error getRedirectResult:', error);
      }
    })();

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, handleGoogleRegister, signOutUser, isMobile }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);