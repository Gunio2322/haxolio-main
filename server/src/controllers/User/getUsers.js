const path = require("node:path");
const getUsers = require('../../db/models/Users.js');
const UserModel = require("../../db/models/Users.js");
// app.get("/getUsers", async (req, res) => {
//     UserModel.find({}).exec()
//     .then(result =>  res.json(result))
//     .catch(err => res.json(err));
//     });

//     module.exports = getUsers


exports.getUsers = async (req, res, next) => {
        UserModel.find().sort({ _id: 1 }).limit(1).exec()
        .then(result =>  res.json(result))
        .catch(err => res.json(err));
        };