let express = require('express');
let app = express();

app.use("/public", express.static(__dirname + "/public"));


app.get("/", function (req, res)) {
    
    const caminho_absoluto = __dirname + "/views/index.html";
    res.sendFile(caminho_absoluto);
    res.json({message: "Hello World"});


};  




































 module.exports = app;
