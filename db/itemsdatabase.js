
const mongoose = require("mongoose");


const connectDB = async () => {

    mongoose.connect("mongodb://localhost:27017/testdb");

    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error:"));
    db.once("open", () => {
        console.log("Connected to MongoDB");
    });

};


module.exports = connectDB;