const express = require("express");
const path = require("path");


const app = express();

app.use( express.static("public"));

app.get("/404", (req, res) => {
    res.send("Error página no encontrada");
  });

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.get('/carrito', (req,res)=>{
    res.sendFile(__dirname + '/views/productCart.html');
});

app.get('/comprar', (req,res)=>{
    res.sendFile(__dirname + '/views/productDetail.html');
});

app.listen(420, ()=>{
    console.log("El sevido esta conectado al puerto 4:20");
     
});
