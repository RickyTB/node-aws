const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hola bienvenido a mi pag. xd jaja");
});

app.listen(3000, ()  => {
    console.log("Server listening on 3000");
});