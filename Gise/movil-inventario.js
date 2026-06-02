// =========================================================
// LÓGICA PARA INTERFAZ PC (Escritorio)
// =========================================================
document.addEventListener("DOMContentLoaded", () => {
    // Referencias PC
    const btonfiltrar = document.getElementById('bton-filtrar');
    const menufiltrar = document.getElementById('menufiltrar');
    const opcionesFiltro = document.querySelectorAll('.opcion-filtro');
    const tarjetas = document.querySelectorAll('.cajapadre-inventario');
    
    const modalAgregar = document.getElementById("formulario-inventario");
    const btnAbrirAgregar = document.getElementById("bton-agregar-inventario");
    const btnCancelarAgregar = document.getElementById("btonCancelar");

    const modalEditar = document.getElementById("formulario-editar-inventario");
    const btnCancelarEditar = document.getElementById("btonCancelarEditar");
    const botonesEditarTarjetas = document.querySelectorAll(".btn-editar");

    // Lógica Filtros
    if (btonfiltrar && menufiltrar) {
        btonfiltrar.addEventListener('click', (event) => {
            event.stopPropagation();
            menufiltrar.style.display = (menufiltrar.style.display === 'flex') ? 'none' : 'flex';
        });
    }

    // Lógica Modales PC
    if (btnAbrirAgregar) btnAbrirAgregar.addEventListener("click", () => modalAgregar.style.display = "flex");
    if (btnCancelarAgregar) btnCancelarAgregar.addEventListener("click", () => modalAgregar.style.display = "none");
    
    botonesEditarTarjetas.forEach(btn => {
        btn.addEventListener("click", (e) => { e.preventDefault(); modalEditar.style.display = "flex"; });
    });
    if (btnCancelarEditar) btnCancelarEditar.addEventListener("click", () => modalEditar.style.display = "none");
});

// =========================================================
// LÓGICA PARA INTERFAZ MÓVIL
// =========================================================
document.addEventListener('DOMContentLoaded', () => {
    const modalAgregar = document.getElementById('agregar-inventario-movil');
    const modalEditar = document.getElementById('editar-inventario-movil');
    const modalEliminar = document.getElementById('eliminar-inventario');

    document.addEventListener('click', (evento) => {
        // --- AGREGAR ---
        if (evento.target.closest('#bton-movilinventario')) {
            evento.preventDefault();
            if (modalAgregar) modalAgregar.classList.remove('oculto');
        }
        if (evento.target.closest('#bton-cancelar-inventario')) {
            evento.preventDefault();
            if (modalAgregar) modalAgregar.classList.add('oculto');
        }

        // --- EDITAR ---
        if (evento.target.closest('#bton-editar-producto')) {
            evento.preventDefault();
            if (modalEditar) {
                modalEditar.classList.remove('oculto');
                // Precarga datos
                document.getElementById('editar-nombre').value = "Fungicida Sistémico Premium";
                // ... resto de campos
            }
        }
        if (evento.target.closest('#bton-cancelar-editar')) {
            evento.preventDefault();
            if (modalEditar) modalEditar.classList.add('oculto');
        }

        // --- ELIMINAR ---
        if (evento.target.closest('#bton-eliminar-movil')) {
            evento.preventDefault();
            if (modalEliminar) modalEliminar.classList.remove('oculto');
        }
        if (evento.target.closest('#bton-cancelar-eliminar')) {
            evento.preventDefault();
            if (modalEliminar) modalEliminar.classList.add('oculto');
        }
    });
});