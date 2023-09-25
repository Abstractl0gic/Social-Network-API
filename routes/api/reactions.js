const express = require('express');
const router = express.Router();
const { reactionController } = require('../../controllers'); 

router.post('/:thoughtId', reactionController.createReaction); // POST create a reaction for a thought by thoughtId
router.delete('/:thoughtId/:reactionId', reactionController.deleteReaction); // DELETE a reaction by thoughtId and reactionId

module.exports = router;
