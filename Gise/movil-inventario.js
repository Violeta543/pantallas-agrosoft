document.addEventListener('DOMContentLoaded', () => {
    
    // --- LÓGICA AGREGAR ---
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

    // --- LÓGICA EDITAR ---
    const btnAbrirEditar = document.getElementById('bton-editar-producto');
    const btnCancelarEditar = document.getElementById('bton-cancelar-editar');
    const modalEditar = document.getElementById('editar-inventario-movil');
    const btnActualizar = document.getElementById('bton-actualizar-inventario');

    if (btnAbrirEditar) {
        btnAbrirEditar.addEventListener('click', () => {
            // 1. Capturamos la info de la tarjeta
            const nombre = document.querySelector('.titulo-tarjeta').textContent.trim();
            const cantidadTexto = document.querySelector('.tipo-tarjeta').textContent;
            
            // 2. Limpiamos datos (asumiendo formato "Cantidad: X unidades")
            const cantidad = cantidadTexto.replace('Cantidad: ', '').split(' ')[0];
            
            // 3. Rellenamos los inputs
            document.getElementById('editar-nombre').value = nombre;
            document.getElementById('editar-cantidad').value = cantidad;
            
            // 4. Abrimos el modal
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

// --- LÓGICA ELIMINAR ---
    const btnAbrirEliminar = document.getElementById('bton-eliminar-movil');
    const btnCancelarEliminar = document.getElementById('bton-cancelar-eliminar');
    const btnConfirmarEliminar = document.getElementById('bton-eliminar-alerta');
    const modalEliminar = document.getElementById('eliminar-inventario');

    // 1. Abrir modal de eliminar
    if (btnAbrirEliminar) {
        btnAbrirEliminar.addEventListener('click', () => {
            // Opcional: Puedes capturar el nombre aquí para ponerlo en el h2 del modal
            const nombreProducto = document.querySelector('.titulo-tarjeta').textContent.trim();
            document.querySelector('.nombre-alerta').textContent = `"${nombreProducto.toUpperCase()}"`;
            
            modalEliminar.classList.remove('oculto');
        });
    }

    // 2. Cerrar modal de eliminar
    if (btnCancelarEliminar) {
        btnCancelarEliminar.addEventListener('click', () => {
            modalEliminar.classList.add('oculto');
        });
    }

    // 3. Confirmar eliminación
    if (btnConfirmarEliminar) {
        btnConfirmarEliminar.addEventListener('click', () => {
            alert("Producto eliminado correctamente");
            modalEliminar.classList.add('oculto');
            // Aquí iría tu lógica para borrar la tarjeta del DOM o de la base de datos
            // Ejemplo: document.getElementById('tarjeta-inventario-movil').remove();
        });
    }