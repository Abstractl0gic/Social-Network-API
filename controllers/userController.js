const { User } = require('../models');

const userController = {
  // Get all users
  getAllUsers(req, res) {
    User.find({})
      .populate({
        path: 'thoughts',
        select: '-__v', // Exclude the __v field from thoughts
      })
      .populate({
        path: 'friends',
        select: '-__v', // Exclude the __v field from friends
      })
      .select('-__v') // Exclude the __v field from users
      .then((userData) => res.json(userData))
      .catch((err) => res.status(500).json(err));
  },

  // Get a single user by its _id
  getUserById(req, res) {
    const { id } = req.params;

    User.findOne({ _id: id })
      .populate({
        path: 'thoughts',
        select: '-__v',
      })
      .populate({
        path: 'friends',
        select: '-__v',
      })
      .select('-__v')
      .then((userData) => {
        if (!userData) {
          return res.status(404).json({ message: 'User not found' });
        }
        res.json(userData);
      })
      .catch((err) => res.status(500).json(err));
  },

  // Create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((userData) => res.json(userData))
      .catch((err) => res.status(400).json(err));
  },

  // Update a user by its _id
  updateUser(req, res) {
    const { id } = req.params;

    User.findOneAndUpdate({ _id: id }, req.body, { new: true, runValidators: true })
      .then((userData) => {
        if (!userData) {
          return res.status(404).json({ message: 'User not found' });
        }
        res.json(userData);
      })
      .catch((err) => res.status(400).json(err));
  },

  // Delete a user by its _id
  deleteUser(req, res) {
    const { id } = req.params;

    User.findOneAndDelete({ _id: id })
      .then((userData) => {
        if (!userData) {
          return res.status(404).json({ message: 'User not found' });
        }
        // Remove the user from their friends' friend lists
        return User.updateMany(
          { _id: { $in: userData.friends } },
          { $pull: { friends: id } }
        );
      })
      .then(() => res.json({ message: 'User deleted' }))
      .catch((err) => res.status(400).json(err));
  },
};

module.exports = userController;
