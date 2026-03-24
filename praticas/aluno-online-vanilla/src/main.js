import './style.css';

const loginForm = document.querySelector('#login-form');

if (loginForm) {
  const fields = {
    email: document.querySelector('#email'),
    password: document.querySelector('#password'),
  };

  const errorElements = {
    email: document.querySelector('#email-error'),
    password: document.querySelector('#password-error'),
  };

  const validators = {
    email: [
      {
        test: (value) => value.trim() !== '',
        message: 'O campo de email é obrigatório.',
      },
      {
        test: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()),
        message: 'Digite um email válido.',
      },
    ],
    password: [
      {
        test: (value) => value.trim() !== '',
        message: 'O campo de senha é obrigatório.',
      },
    ],
  };

  const setError = (fieldName, message) => {
    const input = fields[fieldName];
    const errorElement = errorElements[fieldName];

    input.classList.add('input-error');
    input.setAttribute('aria-invalid', 'true');
    errorElement.textContent = message;
  };

  const clearError = (fieldName) => {
    const input = fields[fieldName];
    const errorElement = errorElements[fieldName];

    input.classList.remove('input-error');
    input.removeAttribute('aria-invalid');
    errorElement.textContent = '';
  };

  const validateField = (fieldName) => {
    const input = fields[fieldName];
    const rules = validators[fieldName];
    const value = input.value;

    for (const rule of rules) {
      if (!rule.test(value)) {
        setError(fieldName, rule.message);
        return false;
      }
    }

    clearError(fieldName);
    return true;
  };

  const validateForm = () => {
    const fieldNames = Object.keys(fields);
    let isFormValid = true;

    fieldNames.forEach((fieldName) => {
      const isFieldValid = validateField(fieldName);

      if (!isFieldValid) {
        isFormValid = false;
      }
    });

    return isFormValid;
  };

  Object.keys(fields).forEach((fieldName) => {
    fields[fieldName].addEventListener('input', () => {
      validateField(fieldName);
    });

    fields[fieldName].addEventListener('blur', () => {
      validateField(fieldName);
    });
  });

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const isFormValid = validateForm();

    if (!isFormValid) {
      const firstInvalidField = Object.keys(fields).find(
        (fieldName) => errorElements[fieldName].textContent !== ''
      );

      if (firstInvalidField) {
        fields[firstInvalidField].focus();
      }

      return;
    }

    window.location.href = '/index.html';
  });
}