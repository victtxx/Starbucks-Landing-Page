function MostrarAlerta(texto) {
    alert(texto);
}

function MudarFundo() {
    document.getElementById('header-sb').style.backgroundColor = 'green';
}

function EspelharImagem() {
    var ob = document.getElementById("cafezinho");
    ob.classList.toggle("refletir-esquerda");
}