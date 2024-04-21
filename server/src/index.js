const express = require("express");
const app = express();
const router = require("./routes/blogRoute");
const mongoose = require("mongoose");
require('./db/mongoose.js')
const slugify = require("slugify")
const _ = require('lodash');
var kebabCase = require('lodash.kebabcase');
const UserModel = require("./db/models/Users");
const BlogModel = require('./db/models/Blog')
const cors = require("cors");
const path = require("path")

app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(cors());
app.options('http://localhost:3001/', cors());

app.use(router);

app.listen(3001, () => {
  console.log("SERVER RUNS PERFECTLY 3001!");
});
