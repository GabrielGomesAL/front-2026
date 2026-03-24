import './style.css';

const loginForm = document.querySelector('#login-form');

if (loginForm) {
  const emailInput = document.querySelector('#email');
  const passwordInput = document.querySelector('#password');

  const errorElements = {
    email: document.querySelector('#email-error'),
    password: document.querySelector('#password-error'),
  };

  const errorMessages = {
    email: 'O campo de email é obrigatório.',
    password: 'O campo de senha é obrigatório.',
  };

  function showError(input, message) {
    input.classList.add('input-error');
    input.setAttribute('aria-invalid', 'true');
    errorElements[input.name].textContent = message;
  }

  function clearError(input) {
    input.classList.remove('input-error');
    input.removeAttribute('aria-invalid');
    errorElements[input.name].textContent = '';
  }

  function validateField(input) {
    if (input.value.trim() === '') {
      showError(input, errorMessages[input.name]);
      return false;
    }

    clearError(input);
    return true;
  }

  [emailInput, passwordInput].forEach((input) => {
    input.addEventListener('input', () => {
      if (input.value.trim() !== '') {
        clearError(input);
      }
    });

    input.addEventListener('blur', () => {
      validateField(input);
    });
  });

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const isEmailValid = validateField(emailInput);
    const isPasswordValid = validateField(passwordInput);

    if (!isEmailValid || !isPasswordValid) {
      return;
    }

    window.location.href = '/';
  });
}