const checkinDigital = function(app) {
    app.post("/checkinDigital", async (req, res) => {
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

    app.get("/checkinDigital/:id", async (req, res) => {
        try {
            console.log(`Consultando checkin: ${req.params.id}`);

            res.status(200).json({
                mensagem: 'Checkin não realizado',
                statusCheckin: false
            });

        } catch (err) {
            res.status(500).json({
                message: "Erro",
                err
            });
        }
    });
}

module.exports = checkinDigital;