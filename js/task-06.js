// Seleccionar el input del DOM
const validationInput = document.getElementById('validation-input');

// verifica la longitud del valor del input y aplicar estilos en consecuencia
const checkInputLength = () => {
  const requiredLength = parseInt(validationInput.dataset.length);
  const inputLength = validationInput.value.length;

  if (inputLength === requiredLength) {
    validationInput.classList.remove('invalid');
    validationInput.classList.add('valid');
  } else {
    validationInput.classList.remove('valid');
    validationInput.classList.add('invalid');
  }
};

validationInput.addEventListener('blur', checkInputLength);