// Obtener todos los botones de "Más Información"
const buttons = document.querySelectorAll('.btn-info');

// Obtener todos los modales
const modals = document.querySelectorAll('.modal');

// Obtener los elementos de cerrar
const closeButtons = document.querySelectorAll('.close');

// Función para abrir el modal
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const modalId = e.target.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.style.display = 'flex';
    });
});

// Función para cerrar el modal
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        modals.forEach(modal => {
            modal.style.display = 'none';
        });
    });
});

// Cerrar el modal cuando se hace clic fuera de él
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        modals.forEach(modal => {
            modal.style.display = 'none';
        });
    }
});
