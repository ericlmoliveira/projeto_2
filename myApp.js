let express = require('express');
let app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(function middleware(req, res, next) {
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
});


app.use("/public", express.static(__dirname + "/public"));


app.get("/", function (req, res) {
    
    const caminho_absoluto = __dirname + "/views/index.html";
    res.sendFile(caminho_absoluto);
});  


app.get("/json", function (req, res) {
    const estilo = process.env.MESSAGE_STYLE;
    let resposta = "Hello json";
    if (estilo === "uppercase") {
        resposta = resposta.toUpperCase();
    }   
    res.json({ "message": resposta });
});

app.get("/now", function (req, res, next) {
    req.time = new Date().toString();
    next(); },
    function (req, res) {
        res.json({ time: req.time });
});


app.get("/:word/echo", function (req, res) {
    const parametro = req.params.word;
    res.json({ "echo": parametro });
});


app.get("/name", function (req, res) {
    const primeiroNome = req.query.first;
    const segundoNome = req.query.last;

    res.json({ "name": primeiroNome + " " + segundoNome });
});


app.post("/name", function(req, res) {
  var nomeCompleto = req.body.first + " " + req.body.last;
  res.json({ name: nomeCompleto });
});































 module.exports = app;
