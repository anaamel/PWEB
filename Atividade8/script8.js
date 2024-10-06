const surveyForm = document.getElementById('surveyForm');
const resultsDiv = document.getElementById('results');

let participants = [];

surveyForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const opinion = parseInt(document.getElementById('opinion').value);

    participants.push({ age, gender, opinion });

    if (participants.length === 45) {
        displayResults();
    }

    surveyForm.reset();
});

function displayResults() {
    const totalAge = participants.reduce((sum, p) => sum + p.age, 0);
    const averageAge = totalAge / participants.length;
    const oldest = Math.max(...participants.map(p => p.age));
    const youngest = Math.min(...participants.map(p => p.age));
    const poorCount = participants.filter(p => p.opinion === 1).length;
    const goodCount = participants.filter(p => p.opinion === 4 || p.opinion === 3).length;
    const percentageGood = (goodCount / participants.length) * 100;
    const maleCount = participants.filter(p => p.gender === 'masculino').length;
    const femaleCount = participants.filter(p => p.gender === 'feminino').length;

    resultsDiv.innerHTML = `
        <h2>Resultados da Pesquisa</h2>
        <p>Média de Idade: ${averageAge.toFixed(2)} anos</p>
        <p>Idade da Pessoa Mais Velha: ${oldest} anos</p>
        <p>Idade da Pessoa Mais Nova: ${youngest} anos</p>
        <p>Quantidade de Pessoas que Responderam "Péssimo": ${poorCount}</p>
        <p>Porcentagem de Pessoas que Responderam "Ótimo" e "Bom": ${percentageGood.toFixed(2)}%</p>
        <p>Número de Mulheres: ${femaleCount}</p>
        <p>Número de Homens: ${maleCount}</p>
    `;
}
