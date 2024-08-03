const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

const PORT = 5000;

const expresshbs = require('express-handlebars')
const handlebars = expresshbs.create({ extname: '.hbs' });
app.engine('.hbs', handlebars.engine)

app.set('view engine', '.hbs');

app.use('/public', express.static(path.join(__dirname, 'public')));

let userData = { name: "Asen" };

app.get('/', (req, res) => {
    let data = [{ title: "The boys" }, { title: "Stranger things" }, { title: "It's black material" }, { title: "Game of trons" }, { title: "The walking dead" }, { title: "The originals" }, { title: "Teen wolf" }];
    res.render("home", { value: "Ivan", data });
});

app.get('/characteristics', (req, res) => {
    console.log(`${req.url} -> ${req.method}`);

    res.render("characteristics");
});

app.get('/email', (req, res) => {
    console.log(`${req.url} -> ${req.method}`);

    res.render("email");
});

app.get('/hobbies', (req, res) => {
    console.log(`${req.url} -> ${req.method}`);

    res.render("hobbies");
});

app.get('/end', (req, res) => {
    console.log(`${req.url} -> ${req.method}`);

    fs.writeFileSync('./data/users.json', JSON.stringify(userData), { charCode: 'utf-8' });
})

app.listen(PORT, () => console.log("App listens on port : " + PORT));