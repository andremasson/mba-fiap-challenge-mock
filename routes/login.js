let loginResponseSuccess = {
    'user': {
        'nome': 'Usuário HMV',
        'cpf': '123.456.789-12'
    },
    'accessToken': 'abc123',
};

let loginResponseError = {
    'message': "Login inválido",
};

var loginRouter = function(app) {
    app.post("/login", async (req, res) => {
        try {
            console.log('Acessando login');

            if (req.body.login === '1212') {
                res.status(401).json(loginResponseError);
            } else {
                res.status(200).json(loginResponseSuccess);
            }

        } catch (err) {
            res.status(400).json({
                message: "Erro",
                err
            });
        }
    });
}

module.exports = loginRouter;