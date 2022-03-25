let contPerguntas = 0;

const perguntas = [
    {
        question: 'Qual o peso?',
        answerType: 'number',
    },
    {
        question: 'Sua idade',
        answerType: 'number',
    },
    {
        question: 'Frequência de exercícios',
        answerType: 'select',
        options: [
            '2 vezes por semana',
            'todos os dias',
            'nunca'
        ]
    },
    {
        question: 'Pergunta string',
        answerType: 'string'
    }
];

const proximaPergunta = () => {
    if (contPerguntas >= perguntas.length) contPerguntas = 0;
    return perguntas[contPerguntas++];
}

const perguntasAnamnese = function(app) {
    app.get("/perguntasAnamnese", async (req, res) => {
        try {
            console.log('Pedindo pergunta');

            res.status(200).json(proximaPergunta());

        } catch (err) {
            res.status(500).json({
                message: "Erro",
                err
            });
        }
    });
}

module.exports = perguntasAnamnese;