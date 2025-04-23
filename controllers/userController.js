import { User } from '../models/index.js';

const userController = {
    async getUsers(_req, res) {
        try {
            const users = await User.find().populate('friends').populate('thoughts');
            res.json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async getSingleUser(req, res) {
        try {
            const user = await User.findById(req.prams.userId)
                .populate('friends')
                .populate('thoughts');

            if (!user) return res.status(404).json({ message: 'User not found' });

            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async createUser(req, res) {
        try {
            const newUser = await User.create (req, body);
            res.json(newUser);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async updateUser(req,res){
        try {
            const updatedUser = await User.findByIdAndUpdate(
                req.params.userId,
                req.body,
                {new:true, runValidators:true}

            );
            if(!updatedUser) return res.status(404).json({message: 'User not found'});

            res.json(updatedUser);
        }catch(err){
            res.status(500).json(err);

        }
      },

      async deleteUser(req, res){
        try {
            const deletedUser = await User.findByIdAndDelete(req.params.userID);
            if(!deletedUser) return res.status(404).json({ message: 'User not found'});

            res.json({message:'User deleted'});
        }catch(err){
            res.status(500).json(err);
        }
      },
     };
    
     export default userController;