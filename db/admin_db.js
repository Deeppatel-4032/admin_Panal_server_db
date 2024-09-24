const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://deeppatel7868:M7383884401DB@cluster1.tzglw.mongodb.net/admin_db_Data").then(()=> {
    console.log("admin_DB is connected....!");
}).catch((err) => {
    console.log("admin_DB is not connected....!", err);
})