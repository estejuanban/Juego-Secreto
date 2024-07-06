let numeroSecretro = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecretro)
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

//Se estableen las condiciones generales del juego 
function condicionesIniciales() {
    asignarTextoElemento("h1", "Juego del número secreto!");
    asignarTextoElemento("p", `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecretro = generarNumeroSecretro();
    intentos = 1;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);;
    // los dos iguales me permiten saber si un valor es igual a otro valor pero no compara
    //su composición los triple iguales compara que sean iguales y que su composición igual
    // números con números strings con strings 
    if (numeroDeUsuario === numeroSecretro) {
        asignarTextoElemento("p", `Acertaste el número en  ${intentos} ${(intentos === 1) ? "intento" : "intentos"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        //El usuario no acertó
        if (numeroDeUsuario > numeroSecretro) {
            asignarTextoElemento("p", "El número secreto es menor");
        } else {
            asignarTextoElemento("p", "El número secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

/* function limpiarCaja() {
    let valorCaja = document.querySelector("#valorUsuario");
    valorCaja.value = "" ;    
}*/
//la parte siguiente es la forma reducida de el limpiar caja anterior que apenas juegue queda vació 
// el input  

function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";
}

/* Si el numero generado esta incluido en la lista Haga una cosa if, si no hacemos otra else 
la condición (incluides) indica si el elemento que buscamos esta incluido dentro de la lista para utilizar 
función if  esta función incluides) nos devuelve un buleano false o true*/
/* el if nos indica que si el numero secreto que se genera en la lista ya esta en ella que genere otro 
con el primer return generarNumeroSecretro(); de lo contrario els guárdelo en la lista 
listaNumerosSorteados.push(numeroGenerado); esto se conoce como recursividad se puede usar la función 
en si misma    */
function generarNumeroSecretro() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números 
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento("p", "Ya se sortearon todos los números posibles")
    } else {
        // Si el numero generado esta incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecretro();
        } else {
            // en esta linea estamos guardando el numero generado en la lista de números Sorteados 
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
// OJO SIEMPRE QUE SE USA UNA BUCLE DE RECURSIVIDAD HAY QUE GENERAR UNA SALIDA EN ESTE CASO CUANDO GENERE 
//LOS NÚMEROS DE UNA A 10 EN LAS LISTA EL CÓDIGO DE ESTALLA YA QUE NO PUEDE GENERAR MAS NÚMEROS YA TODOS ESTÁN GENERADOS 


// EN ESTA FUNCIÓN ACTIVAMOS EL BOTÓN DE REINICIAR JUEGO 

function reiniciarJuego() {
    //Limpiar la caja 
    limpiarCaja();
    //Indicar mensaje de intervalo de números al inicio p
    //Generar el número aleatorio
    //Reiniciar el numero de intentos
    condicionesIniciales()
    //Deshabilitar el botón de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();
