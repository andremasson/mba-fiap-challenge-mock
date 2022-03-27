
const checkinResponse = [
    {
        "questionId": "PESO",
        "questionTitle": "Peso",
        "answerType": "NUMERICO",
        "options": null
    },
    {
        "questionId": "ALTURA",
        "questionTitle": "Altura",
        "answerType": "NUMERICO",
        "options": null
    },
    {
        "questionId": "FUMANTE",
        "questionTitle": "Fumante",
        "answerType": "SELECAO",
        "options": [
            "Sim",
            "Não"
        ]
    },
    {
        "questionId": "FREQUENCIA_EXERCICIOS",
        "questionTitle": "Frequência de Exercícios",
        "answerType": "SELECAO",
        "options": [
            "Nenhuma",
            "Menos de 1 vez por semana",
            "1 vez por semana",
            "2 vezes ou mais por semana"
        ]
    },
    {
        "questionId": "DIABETICO",
        "questionTitle": "Diabético",
        "answerType": "SELECAO",
        "options": [
            "Sim",
            "Não"
        ]
    },
];

const checkinFormulario = function(app) {
    app.get("/check-in/form", async (req, res) => {
        try {
            console.log('formulario de checkin');
            res.status(200).json(checkinResponse);

        } catch (err) {
            res.status(500).json({
                message: "Erro",
                err
            });
        }
    });
}

module.exports = checkinFormulario;