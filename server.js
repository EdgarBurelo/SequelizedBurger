const express = require("express");
const path = require("path");
const bodyparser = require("body-parser");
const fs = require("fs");

const app = express();


const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname+"/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});