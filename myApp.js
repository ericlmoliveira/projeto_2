let express = require('express');
let app = express();


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





































 module.exports = app;
