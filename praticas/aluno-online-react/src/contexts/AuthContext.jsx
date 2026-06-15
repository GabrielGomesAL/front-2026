/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  autenticarUsuario,
  limparSessao,
  obterSessao,
  salvarSessao,
} from '../services/authService';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const sessaoInicial = obterSessao();
  const [usuario, setUsuario] = useState(sessaoInicial?.usuario || null);
  const [token, setToken] = useState(sessaoInicial?.token || null);
  const autenticado = Boolean(usuario && token);

  const logout = useCallback(() => {
    limparSessao();
    setUsuario(null);
    setToken(null);
  }, []);

  const login = useCallback(async (credenciais) => {
    const sessao = await autenticarUsuario(credenciais);

    salvarSessao(sessao);
    setUsuario(sessao.usuario);
    setToken(sessao.token);

    return sessao;
  }, []);

  useEffect(() => {
    function handleUnauthorized() {
      logout();
    }

    window.addEventListener('auth:unauthorized', handleUnauthorized);

    return () => {
      window.removeEventListener('auth:unauthorized', handleUnauthorized);
    };
  }, [logout]);

  useEffect(() => {
    function verificarSessaoAoClicar() {
      if (autenticado && !obterSessao()) {
        logout();
      }
    }

    window.addEventListener('click', verificarSessaoAoClicar);

    return () => {
      window.removeEventListener('click', verificarSessaoAoClicar);
    };
  }, [autenticado, logout]);

  const value = useMemo(
    () => ({
      autenticado,
      token,
      usuario,
      login,
      logout,
    }),
    [autenticado, token, usuario, login, logout],
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
