var num1;
var num2;
var soma;
var sub;
var prod;
var div;
var restodiv;

num1 = parseFloat(prompt(`Olá, insira um número`));
num2 = parseFloat(prompt(`Insira outro número`));

continuar = confirm('Confirme para calcular');

if(continuar){

    function contas(){
        soma = num1 + num2;
        sub = num1 - num2;
        prod = num1 * num2;
        div = num1 / num2;
        restodiv = num1 % num2;

        return `A soma de ${num1} com ${num2} é ${soma}
        \n A subtração de ${num1} por ${num2} é ${sub}
        \n O produto entre ${num1} e ${num2} é ${prod}
        \n A divisão de ${num1} por ${num2} é ${div}
        \n E o resto da divisão é ${restodiv}`;
    }

    alert(contas());

}else{
    alert(`até a próxima`);
}