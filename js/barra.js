// Obtener el elemento de la barra de progreso
let progressBar = document.getElementById('progress-bar');

// Calcular el porcentaje de progreso de la página
function calcularProgreso() {
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let progreso = (scrollTop / scrollHeight) * 100;
  return progreso;
}

// Actualizar la barra de progreso al hacer scroll
function updateProgressBar() {
  let progreso = calcularProgreso();
  progressBar.style.width = progreso + '%';
}

// Escuchar el evento de scroll y actualizar la barra de progreso
window.addEventListener('scroll', updateProgressBar);
