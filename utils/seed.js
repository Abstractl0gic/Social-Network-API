const mongoose = require('mongoose');
const { User, Thought } = require('../models');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/social_network', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once('open', async () => {
  try {
    // Create users
    const user1 = await User.create({
      username: 'user1',
      email: 'user1@example.com',
    });

    const user2 = await User.create({
      username: 'user2',
      email: 'user2@example.com',
    });

    // Create thoughts associated with users
    await Thought.create({
      thoughtText: 'This is a thought from user1',
      username: user1.username,
    });

    await Thought.create({
      thoughtText: 'This is a thought from user2',
      username: user2.username,
    });

    console.log('Data seeded successfully.');
  } catch (err) {
    console.error('Error seeding data:', err);
  } finally {
    db.close();
  }
});
