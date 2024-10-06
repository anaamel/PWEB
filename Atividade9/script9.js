function maiorNum(num1, num2, num3) { 
    return Math.max(num1, num2, num3);
}

function ordemCrescente(n1, n2, n3) {
    return [n1, n2, n3].sort((a, b) => a - b);
}

function Palindromo(str) {
    const upperCaseStr = str.toUpperCase().replace(/\s/g, '');
    const reversedStr = upperCaseStr.split('').reverse().join('');
    if (upperCaseStr === reversedStr){
        return "é palíndromo";
    } else {
        return "não é palíndromo";
    }
}

function Triangulo(a, b, c) {
    if (a + b > c && a + c > b && b + c > a) {
        if (a === b && b === c) {
            return "Equilátero";
        } else if (a === b || a === c || b === c) {
            return "Isósceles";
        } else {
            return "Escaleno";
        }
    } else {
        return "Não forma um triângulo";
    }
}

while (true) {
    const opcao = prompt("Escolha:\n1. Maior número\n2. Ordem crescente\n3. É palíndromo?\n4. Tipo de triângulo\n5. Sair");

    if (opcao === '1') {
        const num1 = parseFloat(prompt("Digite o primeiro número: "));
        const num2 = parseFloat(prompt("Digite o segundo número: "));
        const num3 = parseFloat(prompt("Digite o terceiro número: "));
        alert("O maior número é: " + maiorNum(num1, num2, num3));
    } else if (opcao === '2') {
        const n1 = parseFloat(prompt("Digite o primeiro número: "));
        const n2 = parseFloat(prompt("Digite o segundo número: "));
        const n3 = parseFloat(prompt("Digite o terceiro número: "));
        alert("Números na ordem crescente: " + ordemCrescente(n1, n2, n3));
    } else if (opcao === '3') {
        const str = prompt("Digite uma palavra ou frase: ");
        alert(str + " " + Palindromo(str));
    } else if (opcao === '4') {
        const a = parseFloat(prompt("Digite o primeiro lado do triângulo: "));
        const b = parseFloat(prompt("Digite o segundo lado do triângulo: "));
        const c = parseFloat(prompt("Digite o terceiro lado do triângulo: "));
        alert("Tipo de triângulo: " + Triangulo(a, b, c));
    } else if (opcao === '5') {
        alert("Saindo...");
        break; 
    } else {
        alert("Opção inválida, tente novamente.");
    }
}