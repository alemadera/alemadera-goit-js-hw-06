function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('[data-create]').addEventListener('click', function() {
    const amount = parseInt(document.querySelector('input[type="number"]').value);
    createBoxes(amount);
  });

  document.querySelector('[data-destroy]').addEventListener('click', function() {
    destroyBoxes();
  });
});

function createBoxes(amount) {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = ''; // Borra Cajas anteriores
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
    size += 10;
  }
}

function destroyBoxes() {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = ''; // Borra todas las cajas
}