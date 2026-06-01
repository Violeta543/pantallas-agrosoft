const btnEditar = document.getElementById("btnEditar");
const acciones = document.getElementById("accionesEdicion");
const lapices = document.querySelectorAll(".lapices");

btnEditar.addEventListener("click", function() {

    // Oculta el botón editar
    btnEditar.style.display = "none";

    // Muestra guardar y cancelar
    acciones.style.display = "block";

    // Muestra todos los lápices
    lapices.forEach(function(lapiz) {
        lapiz.style.display = "block";
    });

});

// ocultar los span y apaarecer los imput
// primero guardamos los 4 lapices en variables 
// aqui lo que hace js es buscar los id que contengan entos id , cuando lo encuentra le dice q guarde el nombre para poderlo usar en js
const lapiznombre = document.getElementById("lapiznombre");
const lapizcorreo = document.getElementById("lapizcorreo");
const lapizcontraseña = document.getElementById("lapizcontraseña");
const lapiztelefono = document.getElementById("lapiztelefono");


// aq1ui se guardan los textos del spam 
 const textonombre = document.getElementById("textonombre");
 const textocorreo = document.getElementById("textocorreo");
 const textocontraseña = document.getElementById("textocontraseña");
 const textotelefono = document.getElementById("textotelefono");

 // aqui se guardan los imputs ,cuando encuentra js puede mostrarlo y ocultarlo
const inputnombre = document.getElementById("inputnombre");
const inputcorreo = document.getElementById("inputcorreo");
const inputcontraseña = document.getElementById("inputcontraseña");
const inputtelefono = document.getElementById("inputtelefono");

// elemntos de la funcionalidad que permitira ejecutar cada uno y al undir el lapiz nos permitira editar la informacion


lapiznombre.addEventListener("click", function() {
    textonombre.style.display = "none";
    inputnombre.style.display = "block";

})

lapizcorreo.addEventListener("click", function() {
    textocorreo.style.display = "none";
    inputcorreo.style.display = "block";
})

lapizcontraseña.addEventListener("click", function() {
textocontraseña.style.display = "none";
inputcontraseña.style.display = "block";

})

lapiztelefono.addEventListener("click",function() {
 textotelefono.style.display = "none";
 inputtelefono.style.display = "block";

})

// este codigo es para q el boton guardar pueda guardar los cambios realizados a la hora en que se edito el perfil

const guardar = document.getElementById("botonguardar");
guardar.addEventListener("click", function() {


textonombre.textContent = inputnombre.value;
textonombre.style.display = "block";
inputnombre.style.display = "none";

textocorreo.textContent = inputcorreo.value;
textocorreo.style.display = "block",
inputcorreo.style.display = "none";

textocontraseña.textContent = inputcontraseña.value;
textocontraseña.style.display = "block";
inputcontraseña.style.display = "none";

textotelefono.textContent = inputtelefono.value;
textotelefono.style.display = "block";
inputtelefono.style.display = "none";


document.querySelectorAll(".lapices").forEach(function(lapiz){
lapiz.style.display = "none";
});

btnEditar.style.display = "block";
acciones.style.display = "none";

});


    // ocultar el guardar y cancelar a la hora de dar cancelar o guardar
    const cancelar = document.querySelector(".cancelar");
cancelar.addEventListener("click", function() {

    inputnombre.value = textonombre.textContent;
    inputcorreo.value = textocorreo.textContent;
    inputcontraseña.value = textocontraseña.textContent;
    inputtelefono.value = textotelefono.textContent;

    inputnombre.style.display = "none";
    inputcorreo.style.display = "none";
    inputcontraseña.style.display = "none";
    inputtelefono.style.display = "none";

    textonombre.style.display = "block";
    textocorreo.style.display = "block";
    textocontraseña.style.display = "block";
    textotelefono.style.display = "block";

    document.querySelectorAll(".lapices").forEach(function(lapiz){
        lapiz.style.display = "none";
    });

    acciones.style.display = "none";
    btnEditar.style.display = "block";

});

// esto es eliminar cunta, ayuda a mostra la pantalla de eliminar cuenta y si al quieres eliminar o no
const btnEliminarcuenta = document.getElementById("btnEliminarcuenta");
const fondoOscuro = document.getElementById("fondoOscuro");
const btncancelarmodal = document.getElementById("btncancelarmodal");
const btnEliminarmodal = document.getElementById("btnEliminarmodal");

btnEliminarcuenta.addEventListener("click",function() {

    fondoOscuro.style.display = "flex";

    btncancelarmodal.addEventListener("click",function() {

fondoOscuro.style.display = "none";
 });


});

btnEliminarmodal.addEventListener("click",function() {
alert("La cuenta a sido eliminada");

window.location.href = "../index.html";

});



// esto abre y cierra en ajustes el ayuda y comentarios//

 const btnCuenta = document.getElementById("btnCuenta");
const btnAyuda = document.getElementById("btnAyuda");

const perfil = document.querySelector(".yonatan");
const panelAyuda = document.getElementById("panelAyuda");

btnAyuda.addEventListener("click", () => {
perfil.style.display = "none";
panelAyuda.style.display = "block";
});

btnCuenta.addEventListener("click", () => {
panelAyuda.style.display = ("none");
perfil.style.display = ("flex");

});