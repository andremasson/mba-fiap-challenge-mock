const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 3200;

const loginRouter = require("./routes/login");
const userRouter = require("./routes/user");
const checkinRouter = require("./routes/checkinDigital");
const consultasRouter = require("./routes/consultas");
const perguntasAnamnese = require("./routes/perguntasAnamnese");
const checkinFormulario = require("./routes/checkinForm");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

loginRouter(app);
userRouter(app);
checkinRouter(app);
consultasRouter(app);
perguntasAnamnese(app);
checkinFormulario(app);

app.listen(port, function() {
  console.log("Porta: " + port);
});

module.exports = app;