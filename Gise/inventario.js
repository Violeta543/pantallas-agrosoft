    document.addEventListener("DOMContentLoaded", () => {
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
});

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

document.addEventListener('DOMContentLoaded', () => {
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
});