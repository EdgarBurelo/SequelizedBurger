const express = require("express");
const burger = require("../models/burger.js");

var router = express.Router();

router.get("/index",function(req,res) {
    burger.all(function(data){
        let devBurger = data.filter((element) => {
            if (element.devoured == 1){
                return element;
            }
        });
        let noDevBurger = data.filter((element) => {
            if (element.devoured == 0) {
                return element;
            }
        });
        let burgersObj = {
            devBurger,
            noDevBurger
        };
        console.log(burgersObj);
        res.render("index",burgersObj);
    });
});

router.post("/index/burgers",function(req,res) {
    burger.insert(req.body.burgername, req.body.devour,function(result) {
        res.json({id: result.insertId});
    });
});

router.put("/index/burgers/:id",function(req,res) {
    burger.update(true, req.params.id,function(result){
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;