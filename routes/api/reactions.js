const router = require('express').Router();
const {
  createReaction,
  deleteReaction,
} = require('../../controllers/reaction-controller');

// Define routes for reactions
router.route('/')
  .post(createReaction);

router.route('/:id')
  .delete(deleteReaction);

module.exports = router;
