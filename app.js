console.log("Web serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();

// MongoDB call
const db = require("./server.js").db();


app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 2 sessions code

// 3 Views code
app.set("views", "./view");
app.set("view engine", "ejs");

// 4 Routing Code
app.post("/create-item", (req, res) => {
    // TODO: code with db here
});

app.get("/author", (req, res) => {
    res.render("author", {user: user});
})

app.get("/", function(req, res) {
    res.render("reja");
});

module.exports = app;