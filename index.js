const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 3200;
const loginRouter = require("./routes/login");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

loginRouter(app)

app.listen(port, function() {
  console.log("Runnning on " + port);
});

module.exports = app;