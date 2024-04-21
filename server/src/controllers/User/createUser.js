const createUser = require('../../db/models/Users.js')
const UserModel = require("../../db/models/Users.js");
exports.createUser = async (req, res, next) => {
    const user = req.body;
    // console.log(req.body)
    const newUser = new UserModel(user);
    await newUser.save();
  
    res.json(user);
  };

