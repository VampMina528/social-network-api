import { User, Thought } from '../models/index.js';

const userController = {
  
  async getUsers(_req, res) {
    try {
      const users = await User.find()
        .populate('friends')
        .populate('thoughts');
      res.json(users);
    } catch (err) {
      console.error('Get Users Error:', err);
      res.status(500).json({ error: err.message });
    }
  },

  async getSingleUser(req, res) {
    try {
      const user = await User.findById(req.params.userId)
        .populate('friends')
        .populate('thoughts');

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.json(user);
    } catch (err) {
      console.error('Get Single User Error:', err);
      res.status(500).json({ error: err.message });
    }
  },

 
  async createUser(req, res) {
    try {
      const newUser = await User.create(req.body);
      res.json(newUser);
    } catch (err) {
      console.error('Create User Error:', err);
      res.status(500).json({ error: err.message });
    }
  },

  
  async updateUser(req, res) {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.userId,
        req.body,
        { new: true, runValidators: true }
      );

      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.json(updatedUser);
    } catch (err) {
      console.error('Update User Error:', err);
      res.status(500).json({ error: err.message });
    }
  },

  async deleteUser(req, res) {
    try {
      const deletedUser = await User.findByIdAndDelete(req.params.userId);

      if (!deletedUser) {
        return res.status(404).json({ message: 'User not found' });
      }

      // BONUS: remove user's thoughts
      await Thought.deleteMany({ _id: { $in: deletedUser.thoughts } });

      res.json({ message: 'User and associated thoughts deleted' });
    } catch (err) {
      console.error('Delete User Error:', err);
      res.status(500).json({ error: err.message });
    }
  },
  async addFriend(req, res) {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.userId,
        { $addToSet: { friends: req.params.friendId } }, // prevent duplicates
        { new: true }
      );
  
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.json(updatedUser);
    } catch (err) {
      console.error('Add Friend Error:', err);
      res.status(500).json({ error: err.message });
    }
  },
  
  async removeFriend(req, res) {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.userId,
        { $pull: { friends: req.params.friendId } },
        { new: true }
      );
  
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.json(updatedUser);
    } catch (err) {
      console.error('Remove Friend Error:', err);
      res.status(500).json({ error: err.message });
    }
  }
  
};

export default userController;
