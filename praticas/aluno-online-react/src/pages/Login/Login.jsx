import { useState } from 'react';
import FormInput from '../../components/FormInput/FormInput';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const [emailError, setEmailError] = useState('');
  const [senhaError, setSenhaError] = useState('');

  function validateEmail(value) {
    return /\S+@\S+\.\S+/.test(value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    let isValid = true;

    setEmailError('');
    setSenhaError('');

    if (!email.trim()) {
      setEmailError('O campo de email é obrigatório.');
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError('Informe um email válido.');
      isValid = false;
    }

    if (!senha.trim()) {
      setSenhaError('O campo de senha é obrigatório.');
      isValid = false;
    } else if (senha.length < 6) {
      setSenhaError('A senha deve ter no mínimo 6 caracteres.');
      isValid = false;
    }

    if (isValid) {
      alert('Login enviado com sucesso!');
    }
  }

  return (
    <div className="login-page">
      <main className="login-container">
        <div className="login-card">
          <div className="login-logo">🎓</div>
          <h1 className="login-title">Aluno Online</h1>

          <form className="login-form" onSubmit={handleSubmit}>
            <FormInput
              label="E-mail"
              type="email"
              name="email"
              placeholder=""
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              error={emailError}
            />

            <FormInput
              label="Senha"
              type="password"
              name="senha"
              placeholder=""
              value={senha}
              onChange={(event) => setSenha(event.target.value)}
              error={senhaError}
            />

            <button type="submit" className="login-button">
              Entrar
            </button>
          </form>
        </div>

        <p className="login-footer">© 2026. Todos os direitos reservados.</p>
      </main>
    </div>
  );
}

export default Login;