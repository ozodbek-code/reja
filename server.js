// const http = require("http");
// const mongodb = require("mongodb");

// let db;
// const connectionString = "mongodb+srv://ozodbekamirov1188_db_user:OZodAWQXCQAS@cluster0.gmm48x3.mongodb.net/Reja?authSource=admin"

// mongodb.connect(connectionString, {
//     useNewUrlParser: true, 
//     useUnifiedTopology: true,
// }, (err, client) => {
//     if(err) console.log("ERROR on connection MongoDB");
//     else {
//          console.log("MongoDB connection succeed");
//          module.exports = client;

//         const app = require("./app");
//         const server = http.createServer(app);
//         let PORT = 3000;
//         server.listen(PORT, function(){
//         console.log(`The server is running successfully on port: ${PORT},http://localhost:${PORT}`);
// });
//     }
// })


console.log("Web Serverni boshlash");

const express = require("express");
const app = express();
const http = require("http");
const fs = require("fs");

let user;

fs.readFile("database/user.json", "utf8", (err, data) => {
    if (err) {
        console.log("ERROR:", err);
    } else {
        user = JSON.parse(data);
        console.log("User data loaded");
    }
});

// Middleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// EJS
app.set("views", "views");
app.set("view engine", "ejs");

// Create item
app.post("/create-item", (req, res) => {

});

// Author page
app.get("/author", (req, res) => {
    res.render("author", { user: user });
});

// Home page
app.get("/", (req, res) => {
    res.render("author", { user: user });
});

// Server
const server = http.createServer(app);

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`The server is running successfully on port: ${PORT}`);
});




