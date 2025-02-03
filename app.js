// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];


function agregarAmigo() {
    let inputAmigos = document.getElementById("amigo");
    if (inputAmigos.value.trim() === "") {
        alert("por favor, inserte un nombre");
    }else{
        amigos.push(inputAmigos.value)
    }
    inputAmigos.value = "";
    console.log(amigos);
    // alert(inputAmigos.value);

}