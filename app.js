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

    db.collection("plans")
        .insertOne({ reja: new_reja })
        .then((data) => {

            console.log(data);

            res.json({
                _id: data.insertedId,
                reja: new_reja
            });

        })
        .catch((err) => {

            console.log(err);
            res.status(500).json({ state: "error" });

        });

});

app.post("/delete-item", (req, res) => {

    const db = req.app.locals.db;
    const id = req.body.id;

    db.collection("plans").deleteOne(
        { _id: new mongodb.ObjectId(id) }
    )
    .then((data) => {

        res.json({ state: "success" });

    })
    .catch((err) => {

        console.log(err);
        res.status(500).json({ state: "error" });

    });

});

app.post("/edit-item", (req, res) => {

    const db = req.app.locals.db;

    const data = req.body;

    console.log("user entered");

    db.collection("plans")
        .findOneAndUpdate(
            { _id: new mongodb.ObjectId(data.id) },
            { $set: { reja: data.new_input } }
        )
        .then((result) => {

            res.json({ state: "success" });

        })
        .catch((err) => {

            console.log(err);
            res.status(500).json({ state: "error" });

        });

});


app.get("/author", (req, res) => {

    res.render("author");

});

app.post("/delete-all", (req, res) => {

const db = req.app.locals.db;
if (req.body.delete_all) {
db.collection("plans")
    .deleteMany({})
            .then(() => {
res.json({state: "hamma rejalar ochirildi"});

})
.catch((err) => {

console.log(err);
res.status(500).json({ state: "error"});

});
}

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