const express = require('express');
const router = express.Router();
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
} = require('../../controllers/thoughtController'); // Import the thought controller functions

// Define routes for Thought entity
router.get('/', getAllThoughts); // GET all thoughts
router.get('/:id', getThoughtById); // GET a single thought by ID
router.post('/', createThought); // POST a new thought
router.put('/:id', updateThought); // PUT update thought by ID
router.delete('/:id', deleteThought); // DELETE thought by ID

module.exports = router;
