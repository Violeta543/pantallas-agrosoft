document.addEventListener('DOMContentLoaded', () => {

    const btonFiltrar = document.getElementById('bton-filtrar');
    const menuFiltrar = document.getElementById('menufiltrar');
    const opcionesFiltro = document.querySelectorAll('.opcion-filtro');
    const itemsInventario = document.querySelectorAll('.cajapadre-inventario');

    btonFiltrar.addEventListener('click', () => {
        menuFiltrar.style.display = (menuFiltrar.style.display === 'block') ? 'none' : 'block';
    });

    opcionesFiltro.forEach(opcion => {
    opcion.addEventListener('click', () => {
        const categoriaSeleccionada = opcion.textContent.toLowerCase().trim();

        opcionesFiltro.forEach(btn => btn.classList.remove('activa'));
        opcion.classList.add('activa');

        itemsInventario.forEach(item => {
            const categoriaItem = item.getAttribute('data-categoria');

            if (categoriaSeleccionada === 'todos' || categoriaItem === categoriaSeleccionada) {
                item.style.display = 'block'; 
            } else {
                item.style.display = 'none';
            }
        });
        menuFiltrar.style.display = 'none';
    });
});

//-------------- AGREGAR ----------------
    const modalAgregar = document.getElementById('formulario-inventario');
    const btonAgregar = document.getElementById('bton-agregar-inventario');
    const btonCancelar = document.getElementById('btonCancelar');

    btonAgregar.addEventListener('click', () => modalAgregar.style.display = 'flex');
    btonCancelar.addEventListener('click', () => modalAgregar.style.display = 'none');

//-------------- EDITAR ----------------
    const modalEditar = document.getElementById('formulario-editar-inventario');
    const btonCancelarEditar = document.getElementById('btonCancelarEditar');
    
    document.querySelectorAll('.btn-editar').forEach(btn => {
        btn.addEventListener('click', () => modalEditar.style.display = 'flex');
    });

    btonCancelarEditar.addEventListener('click', () => modalEditar.style.display = 'none');

//-------------- ELIMINAR -----------------
    const modalEliminar = document.getElementById('modal-eliminar');
    const btonCancelarEliminar = document.getElementById('btn-cancelar-eliminar');

    document.querySelectorAll('.btn-eliminar').forEach(btn => {
        btn.addEventListener('click', () => modalEliminar.style.display = 'flex');
    });

    btonCancelarEliminar.addEventListener('click', () => modalEliminar.style.display = 'none');
});