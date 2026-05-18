/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useMemo, useState } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [autenticado, setAutenticado] = useState(false);
  const [usuario, setUsuario] = useState(null);

  function login(dadosUsuario) {
    setUsuario(dadosUsuario);
    setAutenticado(true);
  }

  function logout() {
    setUsuario(null);
    setAutenticado(false);
  }

  const value = useMemo(
    () => ({
      autenticado,
      usuario,
      login,
      logout,
    }),
    [autenticado, usuario],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth deve ser usado dentro do AuthProvider.');
  }

  return context;
}
