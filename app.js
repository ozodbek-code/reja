console.log("Web serverni boshlash");

const express = require("express");
const res = require("express/lib/response");

const app = express();

// MongoDB call
const mongodb = require("mongodb");

app.use(express.static("public"));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// 2 sessions code

// 3 Views code

app.set("views", "./views");

app.set("view engine", "ejs");

// 4 Routing Code

app.post("/create-item", (req, res) => {

    console.log("user entered /create-item");

    const db = req.app.locals.db;

    const new_reja = req.body.reja;

    db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {

        console.log(data.ops);

        res.json(data.ops[0]);

    });

});

app.post("/delete-item", (req, res) => {

    const db = req.app.locals.db;

    const id = req.body.id;

    db.collection("plans").deleteOne(
        { _id: new mongodb.ObjectId(id) },
        function(err, data) {

            res.json({ state: "success" });

        }
    );

});

app.get("/author", (req, res) => {

    res.render("author");

});

app.get("/", async function(req, res) {
    console.log("user entered /");

    const db = req.app.locals.db;

    try {
        const data = await db.collection("plans").find({}).toArray();

        console.log(data);

        res.render("reja", { items: data });

    } catch (err) {
        console.log(err);
        res.status(500).send(err.message);
    }
});

module.exports = app;