var nome;
var nota;
var nota1;
var nota2;
var nota3;
var media;
var continuar;

nome = (prompt('Qual é seu nome?'));

continuar = confirm('Você deseja calcular sua média?');

if (continuar) {
    nota = parseFloat(prompt('Digite a primeira nota'));
    nota1 = parseFloat(prompt('Digite a segunda nota'));
    nota2 = parseFloat(prompt('Digite a terceira nota'));
    nota3 = parseFloat(prompt('Digite a quarta nota'));

    function mediaarit() {
        media = (nota + nota1 + nota2 + nota3) / 4;

        return `Sua média aritmética é ${media}`;
    }

    alert(mediaarit());

} else {
    alert(`bem vindo(a) ${nome}`);
}