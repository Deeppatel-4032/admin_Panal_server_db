const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/admin_db_Data").then(()=> {
    console.log("admin_DB is connected....!");
}).catch((err) => {
    console.log("admin_DB is not connected....!", err);
})