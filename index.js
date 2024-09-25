const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config()
const routes = require("./routes/index_routes.js");
const path = require("path");
const bodyParser = require("body-parser");
const cookies = require("cookie-parser");
const port = process.env.PORT || 3003;
const Path = path.join(__dirname,"views/html");
const db = require("./db/admin_db.js");
const upload = require("./middleware/amin_multer_middleware.js");

app.set("view engine", "ejs");
app.set("views", Path);

app.use(express.static(Path));
app.use('/assets',express.static(path.join(__dirname,'views/assets')))
app.use("/public", express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.use(cookies());

app.use("/", routes);

app.listen(port, (err) => {
    if(!err) {
     console.log(`server is runing of http://localhost:${port}`);
    } 
});