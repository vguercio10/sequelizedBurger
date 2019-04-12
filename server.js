// Requiring express package
var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

// Serving stating contect for the app from the "public" directory in the application directory

app.use(express.static("public"));

var db = require("./models");

// Parse the application body as JSON
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// set handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// This is importing the routes and giving the server access to them
require("./controllers/burgers_controller")(app);

// Syncing sequelize models 
db.sequelize.sync().then(function() {
// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
});