const User = require('../Models/UserModel')
const mongoose = require('mongoose')

// get all users
const getUsers = async (req, res) => {
    const users = await User.find({}).sort({createdAt: -1})

    res.status(200).json(users)
}

// API function to count total documents in the User collection
const countUsers = async (req, res) => {
    try {
        const totalUsers = await User.countDocuments({});
        res.status(200).json({ totalUsers });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

// get single user
const getUserById = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No User Found'})
    }
    const user = await User.findById(id)

    if(!user){
        return res.status(404).json({error: 'No User Found'})
    }
    res.status(200).json(user)
}

// create user
const createUser = async (req, res) => {
    const { first_name, last_name, address, gender, email, phone, password, user_type, gallons} = req.body
    try{
        const user = await User.create({ first_name, last_name, address, gender, email, phone, password, user_type, gallons})
        res.status(200).json(user)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

// delete user
const deleteUser = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No User Found'})
    }

    const user = await User.findOneAndDelete({_id: id})

    if(!user){
        return res.status(404).json({error: 'No User Found'})
    }
    res.status(200).json(user)
}

// update user
const updateUser = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No User Found'})
    }
    const user = await User.findByIdAndUpdate({_id: id}, {
        ...req.body
    })

    if(!user){
        return res.status(404).json({error: 'No User Found'})
    }
    res.status(200).json(user)
}

module.exports = {
    getUsers,
    countUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUser
}