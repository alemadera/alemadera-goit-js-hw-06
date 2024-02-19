// Selecciona el input del DOM
const fontSizeControl = document.getElementById('font-size-control');

// Selecciona el span del DOM
const textSpan = document.getElementById('text');

// Función para cambiar el tamaño del texto
const changeFontSize = () => {
  const fontSize = fontSizeControl.value + 'px';
  textSpan.style.fontSize = fontSize;
};

fontSizeControl.addEventListener('input', changeFontSize);