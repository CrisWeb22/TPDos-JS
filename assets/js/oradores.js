// Actualiza el contenido en cuestion de la pagina
function actualizarContenido(id, nuevoContenido){
    document.getElementById(id).innerHTML = nuevoContenido;
}

// Retorna el valor dado su ID 
function getValorById(id){
    //usa el DOM para capturar el valor del tag HTML
    return document.getElementById(id).value;
}

//Funcion que efectua el calculo para el pago final
function calcular(operacion){
    let valor1 = getValorById('valor1');
    let valor2 = document.getElementById("floatingSelect").value;
    let res = valor1 * valor2;
    actualizarContenido('total', res);
}

function borrar(){
    // Obtener todos los input
    let inputs = document.querySelectorAll("input");

    // Limpiar los input
    inputs.forEach((input) => {
    input.value = "";
    });

}