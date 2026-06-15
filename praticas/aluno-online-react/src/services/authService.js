const API_URL = 'http://localhost:3000';
const TOKEN_KEY = 'alunoOnlineToken';
const USER_KEY = 'alunoOnlineUsuario';

function gerarToken() {
  const bytes = new Uint8Array(24);
  crypto.getRandomValues(bytes);

  return btoa(String.fromCharCode(...bytes));
}

function removerDadosSensiveis(usuario) {
  const usuarioSeguro = { ...usuario };

  delete usuarioSeguro.senha;

  return usuarioSeguro;
}

export async function autenticarUsuario({ email, senha }) {
  const response = await fetch(`${API_URL}/usuarios`);

  if (!response.ok) {
    throw new Error('Não foi possível autenticar o usuário.');
  }

  const usuarios = await response.json();
  const usuarioEncontrado = usuarios.find((usuario) => usuario.email === email);

  if (!usuarioEncontrado || usuarioEncontrado.senha !== senha) {
    throw new Error('E-mail ou senha inválidos.');
  }

  return {
    token: gerarToken(),
    usuario: removerDadosSensiveis(usuarioEncontrado),
  };
}

export function salvarSessao({ token, usuario }) {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(USER_KEY, JSON.stringify(usuario));
}

export function obterToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function obterSessao() {
  const token = obterToken();
  const usuarioSalvo = localStorage.getItem(USER_KEY);

  if (!token || !usuarioSalvo) {
    return null;
  }

  try {
    return {
      token,
      usuario: JSON.parse(usuarioSalvo),
    };
  } catch {
    limparSessao();
    return null;
  }
}

export function limparSessao() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}
