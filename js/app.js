const forma = document.querySelector("#forma");
const textoArea = document.querySelector("#textarea1");
const claveCifrado = document.querySelector("#clave1");
const tipo = document.querySelector("#inlineSelect");
const resultado = document.querySelector("#resultado");


// Generar un objeto con la búsqueda
const datosRequisitos = {
    texto: "",
    clave: "",
    accion: "",
};

const diccionario = {
    1: "A",
    2: "B",
    3: "C",
    4: "D",
    5: "E",
    6: "F",
    7: "G",
    8: "H",
    9: "I",
    10: "J",
    11: "K",
    12: "L",
    13: "M",
    14: "N",
    15: "O",
    16: "P",
    17: "Q",
    18: "R",
    19: "S",
    20: "T",
    21: "U",
    22: "V",
    23: "W",
    24: "X",
    25: "Y",
    26: "Z",
    27: "0",
    28: "1",
    29: "2",
    30: "3",
    31: "4",
    32: "5",
    33: "6",
    34: "7",
    45: "8",
    36: "9"

}



function muestraArreglo(diccionario, cadena, llave) {

    let arregloVerdadero = [];

    // Convierte en un array 
    cadena = cadena.split("");

    // Itera y recorre el diccionario para encriptar
    for (let index = 0; index < cadena.length; index++) {

        for (const key in diccionario) {

            if (cadena[index] === diccionario[key]) {

                arregloVerdadero.push(parseInt(key))
            }

        }

    }


    return arregloVerdadero;

}


function encriptarCadena(diccionario, cadena, llave) {
    let arregloEncriptado = [];

    // Convierte en un array 
    cadena = cadena.split("");

    // Itera y recorre el diccionario para encriptar
    for (let index = 0; index < cadena.length; index++) {

        for (const key in diccionario) {

            if (cadena[index] === diccionario[key]) {

                arregloEncriptado.push(parseInt(key) + llave)
            }

        }

    }



    // Itera  y arregla los numeros de los arreglos
    for (let index = 0; index < arregloEncriptado.length; index++) {

        if (arregloEncriptado[index] > 36) {
            arregloEncriptado[index] = (arregloEncriptado[index] - 36);

        }

    }


    return arregloEncriptado;
}



function desencriptarCadena(diccionario, arreglo, llave) {

    let arregloVerdadero = [];

    for (let index = 0; index < arreglo.length; index++) {

        if (arreglo[index] > llave) {
            arregloVerdadero.push(arreglo[index] - llave);
        } else {
            arregloVerdadero.push((26 - llave) + arreglo[index]);
        }

    }

    return arregloVerdadero;

}



function muestraMensaje(diccionario, arreglo) {

    let cadena = "";

    // Guardo el mensaje encriptado
    arreglo.forEach(item => {
        for (const key in diccionario) {
            if (item === parseInt(key)) {
                cadena = cadena + diccionario[key];
            }
        }

    });

    return cadena;

}


forma.addEventListener("submit", (event) => {
    event.preventDefault();

    limpiarHTML();


    const parrafo = document.createElement("p");
    parrafo.classList.add("text-primary", "text-center");

    if (datosRequisitos.accion === "1") {
        let retornoEncriptado = encriptarCadena(diccionario, datosRequisitos.texto.toUpperCase(), parseInt(datosRequisitos.clave));

        parrafo.innerText = muestraMensaje(diccionario, retornoEncriptado);
    } else if (datosRequisitos.accion === "2") {


        let resul = muestraArreglo(diccionario, datosRequisitos.texto.toUpperCase(), parseInt(datosRequisitos.clave))
        let retornoDesencriptado = desencriptarCadena(diccionario, resul, parseInt(datosRequisitos.clave));

        parrafo.innerText = muestraMensaje(diccionario, retornoDesencriptado);
    }

    resultado.appendChild(parrafo);

});


textoArea.addEventListener("input", event => {
    // Trae el valor del Select HTML (event.target.value)
    datosRequisitos.texto = textoArea.value;


});

claveCifrado.addEventListener("input", event => {
    // Trae el valor del Select HTML (event.target.value)
    datosRequisitos.clave = claveCifrado.value;

});


tipo.addEventListener("input", event => {
    // Trae el valor del Select HTML (event.target.value)
    datosRequisitos.accion = tipo.value;

});


function limpiarHTML() {
    // Mientras sea verdadera vamos a eliminar cada uno de los Hijos
    while (resultado.firstChild) {
        // Remueve lo que existe
        resultado.removeChild(resultado.firstChild);
    }

}



let mensaje = "HOLA";
let llave = 12;

let retornoEncriptado = encriptarCadena(diccionario, mensaje, llave);
let retornoDesencriptado = desencriptarCadena(diccionario, retornoEncriptado, llave)

console.log("ENCRIPTADO: ", muestraMensaje(diccionario, retornoEncriptado));
console.log("DESENCRIPTADO: ", muestraMensaje(diccionario, retornoDesencriptado));