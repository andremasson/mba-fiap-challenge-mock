// [ ESTA_NO_LOCAL, NO_LOCAL_APOS_1_HORA, NO_LOCAL_EM_ATE_1_HORA, NO_LOCAL_EM_ATE_30_MINUTOS ]

const checkinResponse = {
    "checkInId": "GK-43O",
    "checkInDate": "2022-03-25 23:20:43",
    "expiresDate": "2022-03-26 03:20:43"
};

const checkinDigital = function(app) {
    app.post("/check-in", async (req, res) => {
        try {
            console.log('Fazendo checkin');
            console.log(req.body);
            res.status(200).json(checkinResponse);

        } catch (err) {
            res.status(500).json({
                message: "Erro",
                err
            });
        }
    });

    app.put("/check-in/:id/confirm", async (req, res) => {
        try {
            console.log(`Consultando checkin: ${req.params.id}`);

            res.status(200).json(checkinResponse);

        } catch (err) {
            res.status(500).json({
                message: "Erro",
                err
            });
        }
    });
}

module.exports = checkinDigital;