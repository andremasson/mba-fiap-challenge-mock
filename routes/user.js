let loginResponseError = {
    'message': "Usuário não cadastrado",
};

var loginRouter = function(app) {
    app.get("/user", async (req, res) => {
        try {
            console.log('Acessando login');

            if (req.body.login === '1212') {
                res.status(401).json(loginResponseError);
            } else {
                res.status(200).json(loginResponseSuccess);
            }

        } catch (err) {
            res.status(500).json({
                message: "Erro",
                err
            });
        }
    });
}

module.exports = loginRouter;