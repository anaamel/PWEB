function aberta(imagem) {
    imagem.src = "imagens/aberta.jpg";
    texto = document.getElementById("estado-janela");
    texto.innerHTML = "Janela Aberta";
}

function fechada(imagem) {
    imagem.src = "imagens/fechada.jpg";
    texto = document.getElementById("estado-janela");
    texto.innerHTML = "Janela Fechada";
}

function quebrada(imagem) {
    imagem.src = "imagens/quebrada.jpg";
    texto = document.getElementById("estado-janela");
    texto.innerHTML = "Janela Quebrada";
}