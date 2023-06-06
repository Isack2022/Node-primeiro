//Importação do módulo express
const express = require("express");

//Instânciando o express como app
const app = express();

//Definir o expresse deve lidar com conteúdos em json
/*
JSON -> JS(Javascript) O(On) N(Notation)
É ua notação em javascript, ou seja, uma forma estruturada de transitar
com os dados, envinado para o servidor ou para o usuário. É uma forma
trocar entre dados entre cliente-servidor usando objeto javascript.Ex:

    lstProduto:[
    {
        id:51,
        nome:"Mouse"
    },
    {
        id:52,
        nome:"Sofá"
    }
    ]
*/
app.use(express.json());
app.use(coletarDados);//Usando o middleware

//Vamos criar a primeira rota com a solicitação com get
app.get("/",(req, res)=>{
    //Responder ao usuário passado o status code e a mensagem
    res.status(200).send("Olá, você acabou de entrar na rota raíz");
});

app.get("/clientes/listar",(req,res)=>{
    console.log(req);
    res.status(200).send(["Marcos","Paulo","Bento","Maria","Sofia"]);
});

app.post("/clientes/cadastrar",(req,res)=>{
    console.log(req);
    res.status(201).send({msg:"Veja os dados enviados",dados:req.body});
});


function coletarDados(req,res,next){
    console.log(req);
    next();
}


app.listen(7777,()=>console.log("Server online => http:127.0.0.1:7777"));