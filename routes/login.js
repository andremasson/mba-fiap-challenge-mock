const users = require('../mocks/users');

let loginResponseError = {
    'message': "Login inválido",
};

var loginRouter = function(app) {
    app.post("/login", async (req, res) => {
        try {
            console.log('Acessando login');

            const user = users[req.body.login];
            if (user === null) {
                res.status(401).json(loginResponseError);
            } else {
                res.status(200).json({
                    'accessToken': 'abc123' + user.nome,
                    user
                });
            }

        } catch (err) {
            res.status(500).json({
                message: "Erro"
            });
        }
    });
}

module.exports = loginRouter;