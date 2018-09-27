let express = require("express");
let router = express.Router();

let burger = require("../models/burger.js")

router.get("/", function(req, res) {

    burger.selectAll(function(data) {
      var burgerObject = {
        burgers: data
      };
      res.render("index", burgerObject);
    });

});

router.post("/api/burger", function(req, res){
    burger.insertOne(req.body.name, function(data){
        res.json({ id: data.insertId });
    })
})

router.put("/api/burger/:id", function(req, res){

    burger.updateOne(req.body.devoured, req.body.id, function(data){
        res.json("Updated burger");
    })
})





// Export routes for server.js to use.
module.exports = router;
