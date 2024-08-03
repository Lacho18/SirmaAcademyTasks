const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const { reqLog } = require("./middleware/reqLog");

const PORT = 5000;

const expresshbs = require('express-handlebars')
const handlebars = expresshbs.create({ extname: '.hbs' });
app.engine('.hbs', handlebars.engine)

app.set('view engine', '.hbs');

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(reqLog);

let userData = {};

app.get('/', (req, res) => {
    res.render("home", { value: "Ivan" });
});

app.get('/characteristics', (req, res) => {
    const data = JSON.parse(req.query.data);
    userData = setObjectData(userData, data);

    getHtmlStructure("characteristics", res);
});

app.get('/email', (req, res) => {
    const data = JSON.parse(req.query.data);
    userData = setObjectData(userData, data);

    getHtmlStructure("email", res);
});

app.get('/hobbies', (req, res) => {
    const data = JSON.parse(req.query.data);
    userData = setObjectData(userData, data);

    getHtmlStructure("hobbies", res);
});

app.get('/end', (req, res) => {
    const data = JSON.parse(req.query.data);
    const hobbies = data.hobbies.split(',');
    userData.hobbies = hobbies;

    fs.readFile('./data/users.json', { encoding: 'utf-8' }, (err, fileData) => {
        if (err) {
            console.error(err);
            return;
        }

        let data;
        try {
            data = JSON.parse(fileData)
        }
        catch (err) {
            console.error(err);
            return;
        }

        if (Array.isArray(data)) {
            data.push(userData);

            fs.writeFile('./data/users.json', JSON.stringify(data), { encoding: 'utf-8' }, (err) => {
                if (err) {
                    console.error("Error writing file:", err);
                } else {
                    console.log("File written successfully!");
                }
            });
        }
        else {
            console.log("Not an array");
        }
    })

    res.send('Data sended');
})

app.listen(PORT, () => console.log("App listens on port : " + PORT));

//from the sended data of the front end, gets the data and sets it to the obj
function setObjectData(obj, data) {
    let keys = Object.keys(data);

    keys.forEach(key => {
        obj[key] = data[key];
    })

    return obj;
}

//reads the given name of the hbs file, and uses the res token to send the html as a string
function getHtmlStructure(fileName, res) {
    fs.readFile(`./views/${fileName}.hbs`, { encoding: 'utf-8' }, (err, fileData) => {
        if (err) {
            console.error("Error reading file: " + err);
            res.end();
        }
        else {
            res.send(fileData);
        }
    });
}