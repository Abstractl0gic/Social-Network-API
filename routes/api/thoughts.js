const express = require('express');
const router = express.Router();
const thoughtController = require('../../controllers/thoughtController'); 

// GET all thoughts
router.get('/', thoughtController.getAllThoughts);

// GET a single thought by ID
router.get('/:id', thoughtController.getThoughtById);

// POST a new thought
router.post('/', thoughtController.createThought);

// PUT update thought by ID
router.put('/:id', thoughtController.updateThought);

// DELETE thought by ID
router.delete('/:id', thoughtController.deleteThought);

// POST add reaction to thought
router.post('/:thoughtId/reactions', thoughtController.addReaction);

// DELETE reaction from thought
router.delete('/:thoughtId/reactions/:reactionId', thoughtController.removeReaction);

module.exports = router;
