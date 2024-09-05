
const perguntas = [
    {
    enunciado: "sorvete ou picolé? ",
    alternativas: [
        { texto: "Sorvete", pontuacao: 2 },
        { texto: "picolé", pontuacao: 1 }
    ]
    },
    {
    enunciado: "dia ou noite?",
    alternativas: [
        { texto: "dia", pontuacao: 2 },
        { texto: "noite", pontuacao: 1 }
    ]
    },
    {
    enunciado: "prefere pizza ou hambúrguer?",
    alternativas: [
        { texto: "pizza", pontuacao: 2 },
        { texto: "hambúrguer", pontuacao: 1 }
    ]
    },
    {
    enunciado: "é bolacha ou biscoito?",
    alternativas: [
        { texto: "bolacha", pontuacao: 2 },
        { texto: "biscoito", pontuacao: 1 }
    ]
    
    },
    {
    enunciado: "você prefere branco ou preto?",
    alternativas: [
        { texto: "branco", pontuacao: 2 },
        { texto: "preto", pontuacao: 1 }
    ]
    }
    ];
   

let atual = 0;
let pontuacao = 0; // Variável para armazenar a pontuação
let perguntaAtual;
const caixaPerguntas = document.getElementById('caixaPerguntas');
const alternativasContainer = document.getElementById('alternativas');

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    alternativasContainer.innerHTML = '';
    perguntaAtual.alternativas.forEach((alternativa) => {
        const button = document.createElement('button');
        button.textContent = alternativa.texto;
        button.addEventListener('click', () => {
            pontuacao += alternativa.pontuacao; // Incrementa a pontuação com base na alternativa selecionada
            atual++;
            if (atual < perguntas.length) {
                mostraPergunta();
            } else {
                exibePontuacaoFinal(); // Chama função para exibir a pontuação final
            }
        });
        alternativasContainer.appendChild(button);
    });
}

function exibePontuacaoFinal() {
    caixaPerguntas.textContent = `Você completou o questionário! Sua pontuação final é: ${pontuacao}`;
    alternativasContainer.innerHTML = ''; // Limpa as alternativas
}

mostraPergunta(); // Inicia o questionário mostrando a primeira pergunta