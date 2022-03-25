const users = require('../mocks/users');

const loginResponse = {
    "accessToken": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI1NjYzNWMxYy0xZTJmLTRkOTktYTBiYS1mMjMzODgxNWEzMGMiLCJ1c2VyVGF4SWQiOiIxMDAwMDAwMDAwMSIsInBhdGllbnRJZCI6IjVjNWQ3NjYwLTIyNmQtNDJjMC1hYzBlLTQyMjYwYmEwMmM4OCIsImV4cGlyZXNJbiI6IjIwMjItMDMtMjVUMDQ6MTY6MzQifQ.UXqjz0GN8fVsmGKxcQ6si83wP5_wcXZmOPAmPwMpPECjiXwJRIUqxBa5mANX-0WCxPnmKwvqdy2ANGwHE0Wcnw",
    "refreshToken": "b439a402-38e6-46eb-bc4c-e0562b51f797",
    "expiresIn": "2022-03-25 04:16:34",
    "userId": "56635c1c-1e2f-4d99-a0ba-f2338815a30c",
    "username": "joao.paulo.dias10000000001",
    "userTaxId": "10000000001",
    "fullName": "João Paulo Dias",
    "patientId": "5c5d7660-226d-42c0-ac0e-42260ba02c88"
};

const loginResponseError = {
    'message': "Login inválido",
};

const loginRouter = function(app) {
    app.post("/login", async (req, res) => {
        try {
            console.log('Acessando login');
            res.status(200).json(loginResponse);
        } catch (err) {
            res.status(500).json({
                message: "Erro"
            });
        }
    });
}

module.exports = loginRouter;