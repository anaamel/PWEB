//objeto 1
var Func1 = {
    Matricula: "003048",
    Nome: "Mariana Ferraz",
    Funcao: "Desenvolvedor"
};
alert("Matricula = " + Func1.Matricula + " Nome = " + Func1.Nome + " Função = " + Func1.Funcao);

//objeto 2
var Func2 = new Object();
Func2.Matricula = "004048";
Func2.Nome = "Larissa Maia da Silva";
Func2.Funcao = "contador";

alert("Matricula = " + Func2.Matricula + " Nome = " + Func2.Nome + " Função = " + Func2.Funcao);

//objeto 3
function Funcionario(Matricula, Nome, Funcao) {
    this.Matricula = Matricula;
    this.Nome = Nome;
    this.Funcao = Funcao;

    this.MostraDados = function () {
        return "Matricula = " + this.Matricula + " Nome = " + this.Nome + " Função = " + this.Funcao;
    }
}
var Func3 = new Funcionario("005049", "Mário Rubens Siqueira", "Gestor");
alert(Func3.MostraDados());