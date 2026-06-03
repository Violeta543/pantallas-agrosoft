const btnFiltrar = document.getElementById("btnFiltrar");
const menuFiltrar = document.getElementById("menuFiltrar");

if (btnFiltrar) {
    btnFiltrar.addEventListener("click", () => {
        if(menuFiltrar.style.display === "block"){
            menuFiltrar.style.display = "none";
        }else{
            menuFiltrar.style.display = "block";
        }
    });
}

function toggleFiltro() {
    const menu = document.getElementById("menuFiltrar");
    if (menu) {
        if (menu.style.display === "block") {
            menu.style.display = "none";
        } else {
            menu.style.display = "block";
        }
    }
}

function mostrarModalEliminar() {
    const modal = document.getElementById('btnEliminar');
    if (modal) {
        modal.style.display = 'flex';
    }
}

function ocultarModalEliminar() {
    const modal = document.getElementById('btnEliminar');
    if (modal) {
        modal.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const cancelarEliminar = document.getElementById('cancelarEliminar');
    const confirmarEliminar = document.getElementById('confirmarEliminar');

    if (cancelarEliminar) {
        cancelarEliminar.addEventListener('click', function(e) {
            e.preventDefault();
            ocultarModalEliminar();
        });
    }

    if (confirmarEliminar) {
        confirmarEliminar.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Notificación eliminada');
            ocultarModalEliminar();
        });
    }
});