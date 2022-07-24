const PORT = process.env.PORT || 3000

const express = require("express");

const bodyParser = require('body-parser');

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));

const path = require("path");

require ("./public/modules/demo_create_mongo_db");

const publicDirectoryPath = path.join(__dirname, "./public");

app.use(express.static(publicDirectoryPath));

const viewsPath = path.join(__dirname,'./views');

app.set('views', viewsPath)

// app.get('', (req, res) => { res.render('index');
app.get("" , (req, res) => {

res.render("index");
});
app.get("/form" , (req, res) => {
    console.log(req.query)
res.render("form");
});
app.post("/form" , (req, res) => {
    console.log(req.body)
res.render("form");
});
app.get("/form2" , (req, res) => {
    console.log(req.query)
res.render("form2");
});
app.post("/form2" , (req, res) => {
    console.log(req.body)

res.render("form2");
});

app.listen(PORT, () => {

console.log("Server is up on port "+PORT);
});
