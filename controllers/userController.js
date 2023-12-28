const User = require("../model/User");

const getAllUser = async (req, res) => {
    const user = await user.find();
    if (!user) return res.status(204).json({ 'message': 'No user found' });
    res.json(user);
}


const deleteUser =  async (req, res) => {
    if (!req?.body?.id) {
        return res.status(400).json({'message': 'User ID required'})
    }
    const user = await User.findOne({ id: req.body.id }).exec();
    if (!user) {
        return res.status(400).json({ "message": `No User matches ID ${req.body.id}` });
    }
    const result = await user.deleteOne({_id : req.body.id});
    res.json(result);
}

const getUser = async (req, res) => {
    if(!req?.params?.id) {
        return res.status(400).json({'message': 'User ID required'})
    }
    const user = await User.findOne({ id: req.params.id }).exec();
    if (!user) {
        return res.status(400).json({ "message": `User ID ${req.params.id} not found` });
    }
    res.json(user);
}

module.exports = {
    getAllUser,
    deleteUser,
    getUser
}