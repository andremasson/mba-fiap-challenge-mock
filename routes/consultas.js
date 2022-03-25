const { consultasAgendadas } = require('../mocks/consultas');

const consultas = function(app) {
    app.get("/consultas", async (req, res) => {
        try {
            console.log(`Consultas agendadas`);

            res.status(200).json(
                consultasAgendadas
            );

        } catch (err) {
            res.status(500).json({
                message: "Erro",
                err
            });
        }
    });

    app.post("/consultas", async (req, res) => {
        try {
            if (!req.body.statusCheckin) {
                console.log('Saindo checkin');
                res.status(200).json({
                    mensagem: 'Checkin não realizado',
                    statusCheckin: false
                });
            } else {
                console.log('Fazendo checkin');
                res.status(200).json({
                    mensagem: 'Checkin confirmado',
                    statusCheckin: true
                });
            }

        } catch (err) {
            res.status(500).json({
                message: "Erro",
                err
            });
        }
    });

    app.get("/consultas/servicos", async (req, res) => {
        try {
            if (!req.body.statusCheckin) {
                console.log('Saindo checkin');
                res.status(200).json({
                    mensagem: 'Checkin não realizado',
                    statusCheckin: false
                });
            } else {
                console.log('Fazendo checkin');
                res.status(200).json({
                    mensagem: 'Checkin confirmado',
                    statusCheckin: true
                });
            }

        } catch (err) {
            res.status(500).json({
                message: "Erro",
                err
            });
        }
    });

    app.get("/consultas/datasDisponiveis", async (req, res) => {
        try {
            if (!req.body.statusCheckin) {
                console.log('Saindo checkin');
                res.status(200).json({
                    mensagem: 'Checkin não realizado',
                    statusCheckin: false
                });
            } else {
                console.log('Fazendo checkin');
                res.status(200).json({
                    mensagem: 'Checkin confirmado',
                    statusCheckin: true
                });
            }

        } catch (err) {
            res.status(500).json({
                message: "Erro",
                err
            });
        }
    });
}

module.exports = consultas;