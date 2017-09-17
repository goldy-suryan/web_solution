let mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/web-solution", {
    useMongoClient: true
});

let contactSchema = mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    message: String
}, { collection: "userCollection"});

contactModel = mongoose.model("contactModel", contactSchema);

module.exports = contactModel;