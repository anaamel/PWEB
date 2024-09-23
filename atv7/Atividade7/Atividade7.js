while (true){
    var entrada = 0;
    var resposta = 0;

    entrada = prompt("1 - Pedra \n2 - Papel \n3 - Tesoura \n4 - Sair \nEscolha o que vai jogar: ");

    entrada = parseInt(entrada);

    if (entrada == 4){
        break;
    }

    var computador = Math.random();
    
    if (computador <= 0.33){
        resposta = 1;
        alert("Computador escolheu: PEDRA");
    }
    else if ((computador > 0.33) && (computador <= 0.66)){
        resposta = 2;
        alert("Computador escolheu: PAPEL");
    }
    else {
        resposta = 3;
        alert("Computador escolheu: TESOURA");
    }
    
    switch (resposta) {
        case 1: if (entrada == 1){
            alert("EMPATE!!");
        }
        else if (entrada == 2){
            alert("JOGADOR EH O VENCEDOR!");
        }
        else {
            alert("COMPUTADOR EH O VENCEDOR!");
        }
            break;
    
        case 2: if (entrada == 1){
            alert("COMPUTADOR EH O VENCEDOR!");
        }
        else if (entrada == 2){
            alert("EMPATE!!");
        }
        else{
            alert("JOGADOR EH O VENCEDOR!");
        }
            break;
        case 3: if (entrada == 1){
            alert("JOGADOR EH O VENCEDOR!");
        }
        else if (entrada == 2){
            alert("COMPUTADOR EH O VENCEDOR!");
        }
        else{
           alert("EMPATE!!"); 
        }
            break;
    }
    
}



