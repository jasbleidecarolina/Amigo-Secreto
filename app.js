// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//adicionar y almacenar nombres de amigos condición de inicio
let amigos = [];

//agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();

//si el campo esta vacio aqui se muestra la alerta y se crea una validación de valor y tipo, el alert como mensaje de respuesta
    if (nombreAmigo === "") {
        alert("por favor, inserte un nombre");
        return;
    }
//agregar el nombre del amigo
amigos.push(nombreAmigo);

//actualizar la lista visual
actualizarlista();

//limpiar los campos de entrada

inputAmigo.value = "";
inputAmigo.focus();

}
//funcion para actualizar la lista visual

function actualizarlista (){
    const listaAmigoUl =document.getElementById("listaAmigos")
    listaAmigoUl.innerHTML = "";

    amigos.forEach(amigo => {
        const li =document.createElement("li");
        li.textContent = amigo;
        listaAmigoUl.appendChild(li);

    });
}

//agregar funcion para sortear un amigo

function sortearAmigo() {
//validar que al menos haya un amigo en la lista y si no los hay nos debe emitir la alerta
if (amigos.length === 0) {
    alert("No hay amigos para sortear. Debes agregar un nombre primero para poder sortear.")
    return
    }

//Genera un indice Aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

//nombre del sorteo

    const amigoSorteado = amigos[indiceAleatorio];
//Muestra los resultados del sorteo

    const resultadoUl = document.getElementById("resultado")
    resultadoUl.innerHTML = `<li>${amigoSorteado}</li>`;

}

//asignar el evento a los botones
    document.addEventListener('DOMContentoaded' , () => {
        document.getElementById("btnAdicionar").addEventListener("click", agregarAmigo)
        document.getElementById("btnSortear").addEventListener("click", sortearAmigo)
    });

