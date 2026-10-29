// Función para cambiar los colores de fondo y texto
function cambiarColor(colorFondo, colorTitulo, colorTexto) {
  const tarjeta = document.getElementById('miTarjeta');
  const titulo = document.getElementById('tituloCard');
  const texto = document.getElementById('textoCard');

  // Aplica los nuevos colores de manera instantánea
  tarjeta.style.backgroundColor = colorFondo;
  titulo.style.color = colorTitulo;
  texto.style.color = colorTexto;
}

// Función para volver a los colores originales
function restablecerColor() {
  const tarjeta = document.getElementById('miTarjeta');
  const titulo = document.getElementById('tituloCard');
  const texto = document.getElementById('textoCard');

  tarjeta.style.backgroundColor = '#334155';
  titulo.style.color = '#ffffff';
  texto.style.color = '#ffffff';
}