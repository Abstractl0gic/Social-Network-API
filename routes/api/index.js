const express = require('express');
const router = express.Router();

const usersRouter = require('./users');
const thoughtsRouter = require('./thoughts');
const reactionsRouter = require('./reactions'); 

router.use('/users', usersRouter);
router.use('/thoughts', thoughtsRouter);
router.use('/reactions', reactionsRouter);

module.exports = router;
