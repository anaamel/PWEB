function calcularIMC(altura, peso) {
    var imc = peso / Math.pow(altura, 2);
    return imc;
}

function ResultadoIMC(imc) {
    var resultado = '';

    if (imc < 18.5) {
        resultado = 'Magreza - Obesidade Grau 0';
    } else if (imc >= 18.5 && imc < 25) {
        resultado = 'Normal - Obesidade Grau 0';
    } else if (imc >= 25 && imc < 30) {
        resultado = 'Sobrepeso - Obesidade Grau I';
    } else if (imc >= 30 && imc < 40){
        resultado = 'Obesidade - Obesidade Grau II';
    } else {
        resultado = 'Obesidade Grave - Obesidade Grau III';
    }

    return resultado;
}

function calcularMostrarIMC() {
    var altura = parseFloat(prompt('Digite sua altura em metros:'));
    var peso = parseFloat(prompt('Digite seu peso em quilogramas:'));
    
    if (altura <= 0 || peso <= 0) {
        alert('Insira valores válidos para altura e peso.');
        return;
    }

    var imc = calcularIMC(altura, peso);
    var resultado = ResultadoIMC(imc);

    alert('Seu IMC é: ' + imc + '\nClassificação: ' + resultado);
}

calcularMostrarIMC();