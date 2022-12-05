const mongoose = require('mongoose');
require("dotenv").config()
mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Connected to DATABASE " + process.env.MONGO_URI);
}).catch((err) => {
    console.log("Unable to Connected to DATABASE " );
    console.log(err)
})