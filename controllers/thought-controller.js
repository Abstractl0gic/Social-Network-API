const { Thought, User } = require('../models');

const thoughtController = {
  getAllThoughts: async (req, res) => {
    try {
      const thoughts = await Thought.find({})
        .populate({
          path: 'reactions',
          select: '-__v',
        })
        .select('-__v')
        .sort({ _id: -1 });
      res.json(thoughts);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  },

  getThoughtById: async ({ params: { id } }, res) => {
    try {
      const thought = await Thought.findOne({ _id: id })
        .populate({
          path: 'reactions',
          select: '-__v',
        })
        .select('-__v');
      if (!thought) {
        return res.status(404).json({ message: 'No thought with this id!' });
      }
      res.json(thought);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  },

  createThought: async ({ body }, res) => {
    try {
      const thought = await Thought.create(body);
      await User.findOneAndUpdate(
        { _id: body.userId },
        { $push: { thoughts: thought._id } },
        { new: true }
      );
      res.json({ message: 'Thought successfully created!' });
    } catch (err) {
      console.error(err);
      res.status(400).json(err);
    }
  },

  updateThought: async ({ params: { id }, body }, res) => {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: id },
        body,
        {
          new: true,
          runValidators: true,
        }
      );
      if (!thought) {
        return res.status(404).json({ message: 'No thought found with this id!' });
      }
      res.json(thought);
    } catch (err) {
      console.error(err);
      res.status(400).json(err);
    }
  },

  deleteThought: async ({ params: { id } }, res) => {
    try {
      const thought = await Thought.findOneAndDelete({ _id: id });
      if (!thought) {
        return res.status(404).json({ message: 'No thought with this id!' });
      }
      await User.findOneAndUpdate(
        { thoughts: id },
        { $pull: { thoughts: id } },
        { new: true }
      );
      res.json({ message: 'Thought successfully deleted!' });
    } catch (err) {
      console.error(err);
      res.status(400).json(err);
    }
  },

  addReaction: async ({ params: { thoughtId }, body }, res) => {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: thoughtId },
        { $addToSet: { reactions: body } },
        { new: true, runValidators: true }
      );
      if (!thought) {
        return res.status(404).json({ message: 'No thought with this id' });
      }
      res.json(thought);
    } catch (err) {
      console.error(err);
      res.status(400).json(err);
    }
  },

  removeReaction: async ({ params: { thoughtId, reactionId } }, res) => {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: thoughtId },
        { $pull: { reactions: { reactionId } } },
        { new: true }
      );
      res.json(thought);
    } catch (err) {
      console.error(err);
      res.status(400).json(err);
    }
  },
};

module.exports = thoughtController;
