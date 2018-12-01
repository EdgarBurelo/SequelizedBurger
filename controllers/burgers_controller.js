// const express = require("express");
// const burger = require("../models/burger.js");
// var router = express.Router();
const db = require("../models");



module.exports = function(app) {
    app.get("/index",function(req,res) {
        db.burgers.findAll({}).then((data) => {
            //console.log(JSON.stringify(data));
            let something = JSON.stringify(data);
            let parse = JSON.parse(something);
            let devBurger = parse.filter((x) => x.devoured == true);
            let noDevBurger = parse.filter((x) => x.devoured == false);
            let obj = {
                noDevBurger,
                devBurger
            };
            //console.log(obj);
            res.render("index", obj);
        });
    });

    app.post("/index/burgers", function (req, res) {
        db.burgers.create({
            burger_name: req.body.burgername,

        }).then((data) => {
            //console.log(JSON.stringify(data));
            //res.JSON(data);
            res.send("added");
        })
    });

    app.put("/index/burgers/:id", function (req, res) {
        db.burgers.update({
            devoured: true
            },
            {
            where: {
                id: req.params.id
            },

        }).then((data) => {
            res.send("devoured");
        });
    });
}

// router.post("/index/burgers",function(req,res) {
//     burger.insert(req.body.burgername, req.body.devour,function(result) {
//         res.json({id: result.insertId});
//     });
// });

// router.put("/index/burgers/:id",function(req,res) {
//     burger.update(true, req.params.id,function(result){
//         if (result.changedRows == 0) {
//             // If no rows were changed, then the ID must not exist, so 404
//             return res.status(404).end();
//         } else {
//             res.status(200).end();
//         }
//     });
// });

// module.exports = router;