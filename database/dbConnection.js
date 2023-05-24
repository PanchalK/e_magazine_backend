const mongoose = require('mongoose')

const ConnectDB = () => {
    const URL = "mongodb://localhost:27017/emagazinedb";

    mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then((res) => {
        console.log("Database Connected Successfully");
     })
     .catch((error)=>{
         console.log("Error!", error.message )
     })
}

module.exports = ConnectDB;