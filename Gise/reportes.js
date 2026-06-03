const btonNuevoReporte =document.getElementById('btonNuevoReporte'); 
const btonCancelar = document.getElementById('btonCancelar'); 
const modalReporte = document.getElementById('formulario-reporte'); 
const btonfiltrar = document.getElementById('bton-filtrar');
const menufiltrar = document.getElementById('menufiltrar');

const btonIconoEliminarMovil = document.querySelector('.icono-descarga'); // O la clase de tu botón basura de la tarjeta
const btonCancelarAlerta = document.getElementById('bton-cancelar-eliminar');
const btonEliminarAlerta = document.getElementById('bton-eliminar-alerta'); 
const modalEliminarMovil = document.getElementById('eliminar-reporte');

btonNuevoReporte.addEventListener('click', () => {
    modalReporte.style.display = 'flex'; 
}); 

btonCancelar.addEventListener('click', () => {
    modalReporte.style.display = 'none';
}); 

window.addEventListener('click', (event) => {
    if (event.target == modalReporte) {
        modalReporte.style.display = 'none'; 
    }
}); 

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

//-------------- Filtrar Categoria PC 

const opcionesFiltro = document.querySelectorAll('.opcion-filtro');
const tarjetasReporte = document.querySelectorAll('.cajapadre-reporte');

opcionesFiltro.forEach(boton => {
    boton.addEventListener('click', () => {

        const categoriaSeleccionada = boton.textContent.toLowerCase().trim();

        tarjetasReporte.forEach(tarjeta => {
            const categoriaTarjeta = tarjeta.getAttribute('data-categoria');


            if (categoriaTarjeta === categoriaSeleccionada) {
                tarjeta.style.display = "flex";
            } else {
                tarjeta.style.display = "none";
            }
        });

        opcionesFiltro.forEach(o => o.classList.remove('activa'));
        boton.classList.add('activa');
        
        menufiltrar.style.display = 'none';
    });
});

// -------------- Descargar Reporte --------------

const btonIconoDescargar = document.querySelector('.icono-descargar'); 
const btonCancelarDescargar = document.getElementById('btonCancelarDescarga');
const modalDescarga = document.getElementById('descargar-reporte'); 

if (btonIconoDescargar) {
    btonIconoDescargar.addEventListener('click', () => {
        modalDescarga.style.display = 'flex'; 
    });
}

btonCancelarDescargar.addEventListener('click', () =>{
    modalDescarga.style.display = 'none'; 
});

window.addEventListener('click', (event) => {
    if (event.target == modalReporte) {
        modalReporte.style.display = 'none'; 
    }
    if (event.target == modalDescarga) {
        modalDescarga.style.display = 'none';
    }
});

// -------------- Eliminar Reporte --------------
const btonIconoEliminar = document.querySelector('.boton-eliminar');
const btonCancelarEliminar = document.getElementById('bton-cancelar-eliminar');
const btonConfirmarEliminar = document.getElementById('bton-eliminar-alerta'); 
const modalEliminar = document.getElementById('eliminar-reporte'); 

if (btonIconoEliminar) {
    btonIconoEliminar.addEventListener('click', () =>{
        modalEliminar.style.display = "flex"; 
    });
}

if (btonCancelarEliminar) {
    btonCancelarEliminar.addEventListener('click', () => {
        modalEliminar.style.display = 'none';
    });
}

if (btonConfirmarEliminar) {
    btonConfirmarEliminar.addEventListener('click', () => {
        alert("Reporte eliminado exitosamente"); 
        modalEliminar.style.display = 'none'; 
    });
}

window.addEventListener('click', (Event) => {
    if (event.target == modalEliminar) {
        modalEliminar.style.display = 'none'; 
    }
}); 

// ---------------- CREAR MOVIL

const botonMas = document.getElementById("bton-movilreporte");
const formulario = document.getElementById("formulario-reporte-movil");
const tarjeta = document.getElementById("tarjeta-reporte-movil");
const btnCrear = document.getElementById("bton-editar-producto");
const btnCancelar = document.getElementById("bton-eliminar-movil");

if (botonMas && formulario && tarjeta) {
    botonMas.addEventListener("click", () => {
        formulario.classList.toggle("oculto"); 
        tarjeta.classList.toggle("oculto"); 
    });

    if (btnCrear) {
        btnCrear.addEventListener("click", () => {
            formulario.classList.add("oculto"); 
            tarjeta.classList.remove("oculto");
            alert("Reporte creado con éxito");
        });
    }

    if (btnCancelar) {
        btnCancelar.addEventListener("click", () => {
            formulario.classList.add("oculto");
            tarjeta.classList.remove("oculto");
        });
    }
}

//------------------- DESCARGAR MOVIL

const botonAbrirMovil = document.getElementById("bton-abrir-descarga-movil"); 
const modalDescargarMovil = document.getElementById("descargar-reporte-movil");
const btnCancelarDescarga = document.getElementById("reporte-eliminar-movil");

if (botonAbrirMovil && modalDescargarMovil) {
    botonAbrirMovil.addEventListener("click", (e) => {
        e.preventDefault(); 
        modalDescargarMovil.classList.toggle("oculto");
    });
}

const formularioDescargaMovil = document.querySelector('.descargar-reporte-movil form');

if (formularioDescargaMovil && modalDescargarMovil) {
    formularioDescargaMovil.addEventListener('submit', (e) => {
        e.preventDefault(); 
        alert("Reporte descargado exitosamente"); 
        modalDescargarMovil.classList.add("oculto"); 
    });
}

if (btnCancelarDescarga && modalDescargarMovil) {
    btnCancelarDescarga.addEventListener("click", () => {
        modalDescargarMovil.classList.add("oculto");
    });
}

