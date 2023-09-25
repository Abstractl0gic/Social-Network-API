const express = require('express');
const router = express.Router();

const apiRoutes = require('./api'); // Import API routes
const htmlRoutes = require('./html'); // Import non-API routes (for rendering HTML pages)

router.use('/api', apiRoutes); // Mount API routes under /api
router.use('/', htmlRoutes); // Mount non-API routes under the root path

module.exports = router;
