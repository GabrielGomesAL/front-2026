const BASE_URL = 'http://localhost:3000/requerimentos';

export async function listarRequerimentos() {
  const response = await fetch(BASE_URL);

  if (!response.ok) {
    throw new Error('Não foi possível carregar os requerimentos.');
  }

  return response.json();
}

export async function cadastrarRequerimento(requerimento) {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requerimento),
  });

  if (!response.ok) {
    throw new Error('Não foi possível cadastrar o requerimento.');
  }

  return response.json();
}
