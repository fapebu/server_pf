var express = require('express');
var app = express();

app.get("/entrada", function(req,res){
    res.send("entro");
})

app.listen(3000, function () {
console.log('Example app listening on port 3000!');
});