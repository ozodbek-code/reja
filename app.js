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
   console.log("user entered /create-item");
   const new_reja = req.body.reja;
   db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
   if(err) {
    console.log(err);
    res.end("something went wrong");
   } else {
     res.end("seccessfully aded");
   }
   });
});

app.get("/author", (req, res) => {
    res.render("author", {user: user});
})

app.get("/", function(req, res) {
    console.log("user entered /");
    db.collection("plans")
    .find()
    .toArray((err, data) => {
        if(err) {
            console.log(err);
            res.end("something went wrong");
        } else {
            console.log(data)
            res.render("reja", { items: data});
        }
    });
});

module.exports = app;