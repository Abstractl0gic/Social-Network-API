const express = require('express');
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require('../../controllers/userController'); // Import the user controller functions

// Define routes for User entity
router.get('/', getAllUsers); // GET all users
router.get('/:id', getUserById); // GET a single user by ID
router.post('/', createUser); // POST a new user
router.put('/:id', updateUser); // PUT update user by ID
router.delete('/:id', deleteUser); // DELETE user by ID

module.exports = router;
