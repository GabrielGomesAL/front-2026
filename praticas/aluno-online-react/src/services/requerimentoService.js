import { obterToken } from './authService.js';

const BASE_URL = 'http://localhost:3000/requerimentos';

class UnauthorizedError extends Error {
  constructor() {
    super('Não autorizado. Faça login novamente.');
    this.status = 401;
  }
}

function notificarNaoAutorizado() {
  window.dispatchEvent(new Event('auth:unauthorized'));
}

function getAuthHeaders() {
  const token = obterToken();

  if (!token) {
    notificarNaoAutorizado();
    throw new UnauthorizedError();
  }

  return {
    Authorization: `Bearer ${token}`,
  };
}

async function handleResponse(response, errorMessage) {
  if (response.status === 401) {
    notificarNaoAutorizado();
    throw new UnauthorizedError();
  }

  if (!response.ok) {
    throw new Error(errorMessage);
  }

  return response.json();
}

export async function listarRequerimentos() {
  const response = await fetch(BASE_URL, {
    headers: getAuthHeaders(),
  });

  return handleResponse(response, 'Não foi possível carregar os requerimentos.');
}

export async function cadastrarRequerimento(requerimento) {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      ...getAuthHeaders(),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requerimento),
  });

  return handleResponse(response, 'Não foi possível cadastrar o requerimento.');
}
