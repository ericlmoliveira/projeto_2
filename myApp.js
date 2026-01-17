let express = require('express');
let app = express();

console.log("Hello World");

app.get("/", function (req, res) {
    
    const caminho_absoluto = __dirname + "/views/index.html";
    res.sendFile(caminho_absoluto);


});






































 module.exports = app;
