const express = require("express");
const router = express.Router();
const burger = require("../models/burger");

router.get("/", function(req, res){
    burger.selectAll(function(data) {
        var hbObj = { burgers: data }
        res.render("index", hbObj)
    })
})

router.post("/api/burger", function(req, res){
    burger.insertOne(req.body.burger_name, function(data) {
        res.status(204).end()
    })
})

router.put("/api/burger",function(req, res){
    burger.updateOne(req.body.id, function(data) {
        res.status(204).end()
    })
})

module.exports = router;