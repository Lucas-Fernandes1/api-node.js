var express = require( "express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:false}));

app.get('/', function(req,res){
    res.sendFile(__dirname + "/index.html");
})
//Usuários Cadastrados
app.post("/logar", function(req, res){
     let usuario = req.body.usuario;
     let senha = req.body.senha;
     let usuarios = [["Lucas", "123"], ["Pedro","543"], ["Maria","321"]];

//Autenticar Para logar
     
    for(let x=0;x<usuarios.length;x++){

        if(usuarios[x][0] == usuario){
            if(usuarios[x][1] == senha){
             res.end("Seja bem vindo, "+usuario+"!")
            }else{
             res.end("Senha Incorreta");
            }
        }   
     }
    res.end("Usuario não encontrado"); 
})
//Porta Servidor Local
app.listen(3000); 