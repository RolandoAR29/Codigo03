var modal = document.getElementById('modal');
var abrirModal = document.getElementById('abrirModal');
var cerrarModal = document.getElementById('cerrarModal');

abrirModal.addEventListener('click', () => {
    modal.style.display = 'flex';
    modal.style.top = 0;
    modal.style.opacity = 1;
    modal.style.transition = '1s';
});
cerrarModal.addEventListener('click', () => {
    modal.style.display = 'none';
    modal.style.transition = '1s';
})