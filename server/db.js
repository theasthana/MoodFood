const mongoose = require("mongoose");
const category = require("./models/category");

module.exports = async function connect() {
    const url = "mongodb://localhost/moodfood";
    console.log("Trying to connect to database.");
    try {
        await mongoose.connect(url, {
            useNewUrlParser:true,
            useUnifiedTopology: true,
        })
        console.log("connection to database is established.");
        // adding code to output categories:
        const data = await category.find({});
        console.log(data);
        //ending of section
    } catch  (error) {
        console.error("There was an error while connecting to the database");
        console.error(error);
    }
}