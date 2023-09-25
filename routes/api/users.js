const express = require('express');
const router = express.Router();
const userController = require('../../controllers/user-controller'); 

// GET all users
router.get('/', userController.getAllUsers);

// GET a single user by ID
router.get('/:id', userController.getUserById);

// POST a new user
router.post('/', userController.createUser);

// PUT update user by ID
router.put('/:id', userController.updateUser);

// DELETE user by ID
router.delete('/:id', userController.deleteUser);

// POST add friend to user
router.post('/:userId/friends/:friendId', userController.addFriend);

// DELETE friend from user
router.delete('/:userId/friends/:friendId', userController.removeFriend);

module.exports = router;
