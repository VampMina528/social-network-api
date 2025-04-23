import { Thought, User } from '../model/index.js';

const thoughtController = {
    async getThoughts(_req, res) {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async getSingleThought(req, res) {
        try {
            const thought = await Thought.findById(req.params.thoughtId);
            if (!thought) return res.status(404).json({ message: 'Thought not found' })
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async createThought(req, res) {
        try {
            const newThought = await Thought.create(req.body);
            await User.findByIdAndUpdate(
                req.body.userId,
                { $push: { thoughts: newThought._id } },
                { new: true }
            );
            res.json(newThought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async updateThought(req, res) {
        try {
            const updatedThought = await Thought.findByIdAndUpdate(
                req.params.thoughtId,
                req.body,
                { new: true, runValidators: true }
            );
            if (!updatedThought) return res.status(404).json({ message: 'Thought not found' };
            res.json(updatedThought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async deleteThought(req, res) {
        try {
            const deleteThought = await Thought.findByIdAndDelete(req.parms.thoughtId);
            if (!deleteThought) return res.status(404).json({ message: 'Thought not found' });

            await User.findByIdAndUpdate(
                { thoughts: deleteThought._id },
                { $pull: { thoughts: deleteThought._id } }
            );

            res.json({ message: 'Thought deleted' });
        } catch (err) {
            res.status(500).json(err);
        }
    },
};

export default thoughtController;
