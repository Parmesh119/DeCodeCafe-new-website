const express = require('express')
const app = express()
const path = require("path");
const Product = require("./db_schema");
require("./db_connection");
const port = 5000;
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,'/assets/css')))

app.get("/", function (req, res){
     res.sendFile(path.join(__dirname, '/index.html'))
     console.log(__dirname)
});

app.listen(port, () => {
  console.log("started");
});

