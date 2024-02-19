// Selecciona el formulario del DOM
const loginForm = document.querySelector('.login-form');

const handleSubmit = (event) => {
  // Evita que la página se recargue al enviar el formulario
  event.preventDefault();

  // Obtiene los elementos del formulario
  const formData = new FormData(loginForm);

  // Convierte los datos del formulario a un objeto
  const formDataObject = Object.fromEntries(formData.entries());

  // Comprobación de espacios en blanco en los datos del formulario
  const hasEmptyFields = Object.values(formDataObject).some(value => value.trim() === '');

  if (hasEmptyFields) {
    // Muestra una alerta si hay campos vacíos
    alert('All fields must be filled out');
  } else {
    // Muestrar el objeto con los datos introducidos en la consola
    console.log(formDataObject);
    
    // Borrar los valores de los campos del formulario
    loginForm.reset();
  }
};


loginForm.addEventListener('submit', handleSubmit)
