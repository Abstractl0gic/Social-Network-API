const { User, Thought } = require('../models');

const userController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find({})
        .populate({
          path: 'thoughts',
          select: '-__v',
        })
        .populate({
          path: 'friends',
          select: '-__v',
        })
        .select('-__v');
      res.json(users);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  },

  getUserById: async ({ params: { id } }, res) => {
    try {
      const user = await User.findOne({ _id: id })
        .populate({
          path: 'thoughts',
          select: '-__v',
        })
        .populate({
          path: 'friends',
          select: '-__v',
        })
        .select('-__v');
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  },

  createUser: async (req, res) => {
    try {
      const userData = await User.create(req.body);
      res.json(userData);
    } catch (err) {
      console.error(err);
      res.status(400).json(err);
    }
  },

  updateUser: async ({ params: { id }, body }, res) => {
    try {
      const user = await User.findOneAndUpdate({ _id: id }, body, {
        new: true,
        runValidators: true,
      });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (err) {
      console.error(err);
      res.status(400).json(err);
    }
  },

  deleteUser: async ({ params: { id } }, res) => {
    try {
      const user = await User.findOneAndDelete({ _id: id });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      await User.updateMany(
        { _id: { $in: user.friends } },
        { $pull: { friends: id } }
      );
      res.json({ message: 'User deleted' });
    } catch (err) {
      console.error(err);
      res.status(400).json(err);
    }
  },
  // add friend
  addFriend: async ({ params: { userId, friendId } }, res) => {
    try {
      const user = await User.findOneAndUpdate(
        { _id: userId },
        { $addToSet: { friends: friendId } },
        { new: true, runValidators: true }
      );
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (err) {
      console.error(err);
      res.status(400).json(err);
    }
  },

  // remove friend
  removeFriend: async ({ params: { userId, friendId } }, res) => {
    try {
      const user = await User.findOneAndUpdate(
        { _id: userId },
        { $pull: { friends: friendId } },
        { new: true }
      );
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (err) {
      console.error(err);
      res.status(400).json(err);
    }
  },
};

module.exports = userController;
