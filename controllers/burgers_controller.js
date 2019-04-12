// Requiring express 
var express = require("express");

var router = express.Router();

// Importing the model burger.js file, its to use its database functions.
// var Burger = require("../models/burger.js");

var db = require("../models");

module.exports = function(app) {
    app.get("/", function(req, res) {
        db.Burger.findAll({}).then(function(data) {
            let object = {
                burgers: data
            };
            res.render("index", object);
        });
    });


app.post("/api/newBurger", function(req, res) {
    console.log("hello" + req.body);
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.Burger.create({
      burger_Name: req.body.burger_Name,
      devoured: req.body.devoured
    }).then(function(data) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(data);
    });
  });
  app.put("/api/burgers/:id", function(req, res) {
    console.log("line 36" + req.params.id);
    db.Burger.update({
        
        devoured: req.body.devoured
      }, {
        where: {
          id: req.params.id,
        }
      }).then(function(data) {
        res.json(data);
      });
    });
}

// module.exports = router;

// // Create routes and set up logic in the routes where required.
// router.get("/", function(req, res) {
//     burger.selectAll(function(data) {
//         var hbsObject = {
//             burgers: data
//         };
//         console.log(hbsObject);
//         res.render("index", hbsObject);
//     })
// })

// router.post("/api/newburger", function(req, res) {
//     // console.log(req.body);
//     burger.insertOne(req.body.burger_name, function(data) {
//         res.json(data);
//     })
// })
// router.put("/api/burgers/:id", function(req, res) {
//     var condition = "id = " + req.params.id;
  
//     console.log("condition", condition);

//     burger.updateOne(
//     "devoured", true
// , condition, function(result) {
//     if (result.changedRows == 0) {
//         return res.status(404).end();
//     } else {
//         res.status(200).end();
//     }
//   });
// });


















// Export routes for server.js to use.
