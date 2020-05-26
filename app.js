const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hola bienvenido a mi pag. xd jaja");
});

const port = process.env.port || 3000;

app.listen(port, ()  => {
    console.log(`Server listening on ${port}`);
});