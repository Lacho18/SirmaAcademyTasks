const express = require("express");
const app = express();
const fs = require("fs");

const PORT = 5000;

const expresshbs = require('express-handlebars')
const handlebars = expresshbs.create({ extname: '.hbs' });
app.engine('.hbs', handlebars.engine)

app.set('view engine', '.hbs')

app.get('/', (req, res) => {
    let data = [{ title: "The boys" }, { title: "Stranger things" }, { title: "It's black material" }, { title: "Game of trons" }, { title: "The walking dead" }, { title: "The originals" }, { title: "Teen wolf" }];
    res.render("home", { value: "Ivan", data });
});

app.listen(PORT, () => console.log("App listens on port : " + PORT));