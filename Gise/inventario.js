    document.addEventListener("DOMContentLoaded", () => {
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



    if (btnAbrirAgregar) {
        btnAbrirAgregar.addEventListener("click", () => {
            modalAgregar.style.display = "flex";
        });
    }

    if (btnCancelarAgregar) {
        btnCancelarAgregar.addEventListener("click", () => {
            modalAgregar.style.display = "none";
        });
    }

    // --------------------------------------

    if (btonfiltrar && menufiltrar) {
    btonfiltrar.addEventListener('click', (event) => {
        event.stopPropagation();
        const estaAbierto = menufiltrar.style.display == 'flex';
        menufiltrar.style.display = estaAbierto ? 'none' : 'flex';
    });

    window.addEventListener('click', (event) => {
        if (!menufiltrar.contains(event.target) && event.target !== btonfiltrar) {
            menufiltrar.style.display = 'none';
        }
    });
}

    opcionesFiltro.forEach(boton => {
        boton.addEventListener('click', () => {
            const categoriaSeleccionada = boton.textContent.toLowerCase().trim();

            tarjetas.forEach(tarjeta => {
                const categoriaTarjeta = tarjeta.getAttribute('data-categoria');

                // Si seleccionan "Todas" o la categoría coincide, mostramos; si no, ocultamos.
                if (categoriaSeleccionada === "todas" || categoriaTarjeta === categoriaSeleccionada) {
                    tarjeta.style.display = "flex";
                } else {
                    tarjeta.style.display = "none";
                }
            });

            // Opcional: mover la clase 'activa' visualmente
            opcionesFiltro.forEach(o => o.classList.remove('activa'));
            boton.classList.add('activa');
        });
    });
});

    //-----------------------------------------

    botonesEditarTarjetas.forEach(boton => {
        boton.addEventListener("click", (e) => {
            e.preventDefault(); 
            modalEditar.style.display = "flex";
        });
    });

    if (btnCancelarEditar) {
        btnCancelarEditar.addEventListener("click", () => {
            modalEditar.style.display = "none";
        });
    }

    window.addEventListener("click", (e) => {
        if (e.target === modalAgregar) {
            modalAgregar.style.display = "none";
        }
        if (e.target === modalEditar) {
            modalEditar.style.display = "none";
        }
    });
;

//-------------------------------------------------


const modalEliminar = document.getElementById("modal-eliminar");
const btnEliminarTarjetas = document.querySelectorAll(".btn-eliminar");
const btnCancelarEliminar = document.getElementById("btn-cancelar-eliminar");


btnEliminarTarjetas.forEach(btn => {
    btn.addEventListener("click", () => {
        modalEliminar.style.display = "flex";
    });
});

btnCancelarEliminar.addEventListener("click", () => {
    modalEliminar.style.display = "none";
});











// MOVIL ------------------------------------------------

    const modalAgregar = document.getElementById('agregar-inventario-movil');
    const modalEditar = document.getElementById('editar-inventario-movil');
    const modalEliminar = document.getElementById('eliminar-inventario');


    document.addEventListener('click', (evento) => {
        
        if (evento.target.closest('#bton-movilinventario')) {
            evento.preventDefault();
            if (modalAgregar) modalAgregar.classList.remove('oculto');
        }
        
        if (evento.target.closest('#bton-cancelar-inventario')) {
            evento.preventDefault();
            if (modalAgregar) modalAgregar.classList.add('oculto');
        }

        if (evento.target.closest('#bton-editar-producto')) {
            evento.preventDefault();
            if (modalEditar) {
                modalEditar.classList.remove('oculto');

                document.getElementById('editar-nombre').value = "Fungicida Sistémico Premium";
                document.getElementById('editar-cantidad').value = 5;
                document.getElementById('editar-stock').value = 5;
                document.getElementById('editar-categoria').value = "pesticida";
                document.getElementById('editar-unidad').value = "litros";
            }
        }
        
        if (evento.target.closest('#bton-cancelar-editar')) {
            evento.preventDefault();
            if (modalEditar) modalEditar.classList.add('oculto');
        }

        if (evento.target.closest('#bton-eliminar-movil')) {
            evento.preventDefault();
            if (modalEliminar) modalEliminar.classList.remove('oculto');
            console.log("Ventana de Eliminar abierta");
        }

        if (evento.target.closest('#bton-cancelar-eliminar')) {
            evento.preventDefault();
            if (modalEliminar) modalEliminar.classList.add('oculto');
            console.log("Ventana de Eliminar cerrada");
        }

        if (evento.target.closest('#bton-eliminar-alerta')) {
            evento.preventDefault();
            alert("Se ha eliminado un inventario");
            if (modalEliminar) modalEliminar.classList.add('oculto');
            console.log("Eliminado con éxito.");
        }
    });
;