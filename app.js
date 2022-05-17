const express = require("express");
const app = express();

const port = 3000;

app.listen(port);

// Configurando la petición GET para crear una ruta

app.get("/", (req, res) => { //Parámetros: ("Ruta donde se va a recibir la petición", función que va a controlar la petición)
 res.send("Hola mundo :D");
}) 

// Escribir en la terminal node app.js