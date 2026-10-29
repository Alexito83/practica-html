// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.btn');
  const cards = document.querySelectorAll('.card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // 1. Remover clase 'active' de todos los botones y agregarla al clickeado
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // 2. Obtener la categoría a filtrar
      const filterValue = button.getAttribute('data-filter');

      // 3. Mostrar u ocultar tarjetas según la categoría
      cards.forEach(card => {
        const category = card.getAttribute('data-category');

        if (filterValue === 'todos' || filterValue === category) {
          card.classList.remove('hide');
        } else {
          card.classList.add('hide');
        }
      });
    });
  });
});