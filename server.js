const express = require("express");
const db = require("./models");
//const path = require("path");
//const bodyparser = require("body-parser");
//const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 8080;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + "/public"));

const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./controllers/burgers_controller.js")(app);

//app.use(routes);
db.sequelize.sync({force:false}).then(() => {
    app.listen(PORT, function () {
        console.log("Server listening on: http://localhost:" + PORT);
    });
});
