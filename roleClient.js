const mongoose = require("mongoose");
const config = require("./config");

module.exports = {
    initMongoose: () => {
        mongoose.connect("mongodb://" + config.auth.host + "/" + config.auth.db).then(() => {
            console.log("Authentication Mongo connected successfully!")
        }).catch(() => {
            console.log("Authentication Mongo connection error!")
        })
    }
}