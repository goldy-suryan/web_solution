let express = require("express");
let bodyParser = require("body-parser");
let cookieParser = require("cookie-parser");
let session = require("express-session");
let mongoose = require("mongoose");
let connectMongo = require("connect-mongo")(session);
let path = require("path");
let app = express();

let api = require("./server/routes/api");

app.use(express.static(path.join(__dirname, "dist")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
    secret: "anySecret",
    resave: false,
    saveUninitialized: false,
    store: new connectMongo({
        mongooseConnection: mongoose.connection
    })
}));

app.use("/api", api);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/dist/index.html"));
});


let port = 3000;

app.listen(port, (err) => {
    if (err) throw new Error("Cannot connect to the server right now");
    console.log("http://localhost:" + port + "/");
});