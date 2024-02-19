// Seleccionar elementos del DOM
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const counterValueSpan = document.getElementById('value');

let counterValue = 0;

// actualiza el valor del contador en la interfaz
const updateCounterValue = () => {
  counterValueSpan.textContent = counterValue;
};

// incrementa el contador
const incrementCounter = () => {
  counterValue++;
  updateCounterValue();
};

// disminuye el contador
const decrementCounter = () => {
  counterValue--;
  updateCounterValue();
};

decrementButton.addEventListener('click', decrementCounter);
incrementButton.addEventListener('click', incrementCounter)