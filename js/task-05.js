// Seleccionar elementos del DOM
const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

// actualiza el texto del span según el valor del input
const updateNameOutput = () => {
  if (nameInput.value.trim() !== '') {
    nameOutput.textContent = nameInput.value;
  } else {
    nameOutput.textContent = 'Anonymous';
  }
};

nameInput.addEventListener('input', updateNameOutput);