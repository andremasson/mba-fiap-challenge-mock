let loginResponse = {
    "patientId": "5c5d7660-226d-42c0-ac0e-42260ba02c88",
    "taxId": "10000000001",
    "fullName": "João Paulo Dias",
    "email": "joao.paulo.dias10000000001@hmv-challenge.fiap.br",
    "phone": "4141000001",
    "cellphone": "41991000001",
    "birthDate": "1980-01-01",
    "genre": "MASCULINO",
    "address": {
        "zipcode": "81920180",
        "publicPlace": "Rua Astrônomo Omar Khayyam",
        "number": "1020",
        "complement": "Casa 10",
        "neighborhood": "Sítio Cercado",
        "city": "Curitiba",
        "state": "Paraná"
    },
    "healthInsurance": "Bradesco TOP Nacional",
    "healthCardNumber": "123412341234001"
};

var userRouter = function(app) {
    app.get("/patients/:id", async (req, res) => {
        try {
            console.log('Acessando usuario');

            res.status(200).json(loginResponse);

        } catch (err) {
            res.status(500).json({
                message: "Erro",
                err
            });
        }
    });
}

module.exports = userRouter;