const express = require('express');
const apiRoutes = require('./routes/api');
const app = express();

// Use the route objects to define your routes
app.use('/api/users', apiRoutes.usersRouter);
app.use('/api/thoughts', apiRoutes.thoughtsRouter);

// Include reactions routes
app.use('/api/reactions', apiRoutes.reactionsRouter);

// ... other setup and middleware

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
