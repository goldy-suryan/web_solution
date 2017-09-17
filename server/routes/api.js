let express = require("express");
let routes = express.Router();
var contactModel = require("../model/model");

routes.get("/user", (req, res, done) => {
    var userContact = new contactModel();
    userContact.name = req.body.name;
    userContact.email = req.body.email;
    userContact.message = req.body.message;

    userContact.save((err, user) => {
        // if (err) throw new Error("Something went wrong");
        
        res.json( userContact);
    })
})

module.exports = routes;