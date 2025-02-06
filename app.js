// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];


function agregarAmigo() {
    let inputAmigos = document.getElementById("amigo");
    if (inputAmigos.value.trim() === "") {
        alert("por favor, inserte un nombre");
    }else{
        amigos.push(inputAmigos.value)
        imprimirEnLista(inputAmigos.value);
    }
    inputAmigos.value = "";
    console.log(amigos);
    // alert(inputAmigos.value);

}
function imprimirEnLista(valueInput) {
    let listaAmigos = document.getElementById("listaAmigos");
    let itemLi = document.createElement("li");
    itemLi.innerHTML = valueInput;
    listaAmigos.appendChild(itemLi);
    // console.log(valueInput);
}
function sortearAmigo() {
    let result = document.getElementById("resultado");
    console.log(amigos.length);
    if (amigos.length != 0) {
        let totalItems = amigos.length;
        let valorAleatorio = Math.floor(Math.random()*totalItems);//no incluye el ultimo numero del array
        result.innerHTML = amigos[valorAleatorio];
    }else{
        alert("No podemos encontrar ningun nombre, ingrese un nombre");
    }
}
