const mongoose = require("mongoose")
const config = require("./config")

module.exports = {
    initMongoose: () => {
        mongoose.connect("mongodb://" + config.app.host + "/" + config.app.db).then(() => {
            console.log("Application Mongo Connected Successfully!")
        }).catch((error) => {
            console.log(error)
            console.log("Application Mongo connection error!")
        })
    }
}