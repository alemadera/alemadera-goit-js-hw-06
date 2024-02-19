function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Selecciona el botón y el span del DOM
const changeColorButton = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');


const changeBackgroundColor = () => {
  // Genera un color aleatorio
  const randomColor = getRandomHexColor();

  // Cambia el color de fondo del body
  document.body.style.backgroundColor = randomColor;

  // Actualiza el span con el nuevo color
  colorSpan.textContent = randomColor;
};

changeColorButton.addEventListener('click', changeBackgroundColor);