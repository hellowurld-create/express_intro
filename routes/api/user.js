const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController');
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');



router.route('/')
    .get(verifyRoles(ROLES_LIST.Admin),userController.getAllUser)
    .delete(verifyRoles(ROLES_LIST.Admin), userController.deleteUser);

router.route('/:id')
    .get(userController.getUser);

module.exports = router;

//Get allUsers and delete, it should be accessible by admin