let express = require('express');
let app = express();

app.use("/public", express.static(__dirname + "/public"));

app.get("json", function (req, res) {
    
    res.json({"message": "Hello json"});
});

app.get("/", function (req, res) {
    
    const caminho_absoluto = __dirname + "/views/index.html";
    res.sendFile(caminho_absoluto);


});






































 module.exports = app;
