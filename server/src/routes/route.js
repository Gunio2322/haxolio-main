const express = require('express');
const router = express.Router();
const getUsers = require('../controllers/User/getUsers');
const createUser = require('../controllers/User/createUser');


router.get('/getUsers', getUsers.getUsers );
// create data route
router.post('/createUser', createUser.createUser);




module.exports = router;