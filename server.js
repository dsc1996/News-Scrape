var express = require("express");
var handlebars = require("express-handlebars");
var mongoose = require("mongoose");
var cheerio = require("cheerio");
var axios = require("axios");
var bodyParser = require("body-parser");

PORT = process.env.PORT || 3000;
var app = express();

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI);

mongoose.connect(MONGODB_URI, { useNewUrlParser: true});
db = require("./modals");

app.engine("handlebars", handlebars({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(express.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static("public"));


require("./routes/router")(app,axios,cheerio,db);

app.listen(PORT,function(){
    console.log("Server connected to PORT: " + PORT);
})