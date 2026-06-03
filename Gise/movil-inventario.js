document.addEventListener('DOMContentLoaded', () => {
    
    const btnAbrir = document.getElementById('bton-movilinventario');
    const btnCancelar = document.getElementById('bton-cancelar-inventario');
    const modal = document.getElementById('agregar-inventario-movil');
    const formulario = document.querySelector('.cuerpo-formulario-movil');

    if(btnAbrir) {
        btnAbrir.addEventListener('click', () => modal.classList.remove('oculto'));
    }
    
    if(btnCancelar) {
        btnCancelar.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.add('oculto');
        });
    }

    if(formulario) {
        formulario.addEventListener('submit', (e) => {
            e.preventDefault(); 
            alert("Formulario registrado con éxito");
            modal.classList.add('oculto');
        });
    }

    // --- Editar  ---
    const btnAbrirEditar = document.getElementById('bton-editar-producto');
    const btnCancelarEditar = document.getElementById('bton-cancelar-editar');
    const modalEditar = document.getElementById('editar-inventario-movil');
    const btnActualizar = document.getElementById('bton-actualizar-inventario');

    if (btnAbrirEditar) {
        btnAbrirEditar.addEventListener('click', () => {
            
            const nombre = document.querySelector('.titulo-tarjeta').textContent.trim();
            const cantidadTexto = document.querySelector('.tipo-tarjeta').textContent;
            const cantidad = cantidadTexto.replace('Cantidad: ', '').split(' ')[0];

            document.getElementById('editar-nombre').value = nombre;
            document.getElementById('editar-cantidad').value = cantidad;

            modalEditar.classList.remove('oculto');
        });
    }

    if (btnCancelarEditar) {
        btnCancelarEditar.addEventListener('click', () => {
            modalEditar.classList.add('oculto');
        });
    }

    if (btnActualizar) {
        btnActualizar.addEventListener('click', (e) => {
            e.preventDefault();
            alert("¡Datos actualizados exitosamente!");
            modalEditar.classList.add('oculto');
        });
    }
});

// --- ELIMINAR ---
    const btnAbrirEliminar = document.getElementById('bton-eliminar-movil');
    const btnCancelarEliminar = document.getElementById('bton-cancelar-eliminar');
    const btnConfirmarEliminar = document.getElementById('bton-eliminar-alerta');
    const modalEliminar = document.getElementById('eliminar-inventario');

    if (btnAbrirEliminar) {
        btnAbrirEliminar.addEventListener('click', () => {

            const nombreProducto = document.querySelector('.titulo-tarjeta').textContent.trim();
            document.querySelector('.nombre-alerta').textContent = `"${nombreProducto.toUpperCase()}"`;
            
            modalEliminar.classList.remove('oculto');
        });
    }
    if (btnCancelarEliminar) {
        btnCancelarEliminar.addEventListener('click', () => {
            modalEliminar.classList.add('oculto');
        });
    }

    if (btnConfirmarEliminar) {
        btnConfirmarEliminar.addEventListener('click', () => {
            alert("Producto eliminado correctamente");
            modalEliminar.classList.add('oculto');
        });
    }