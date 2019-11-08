const express = require("express");
const router = express.Router();
const burger = require("../models/burger");

router.get("/", function(req, res){
    burger.selectAll(function(data) {
        var returnObj = { burgers: data }
        console.log(returnObj);
        res.render("index", returnObj)
    })
})

router.post("/api/burger", function(req, res){
    burger.insertOne(req.body.burger_name, function(data) {
        console.log(req.body);
        res.status(204).end()
    })
})

router.put("/api/burger",function(req, res){
    burger.updateOne(req.body.id, function(data) {
        console.log(req.body);
        res.status(204).end()
    })
})

module.exports = router;