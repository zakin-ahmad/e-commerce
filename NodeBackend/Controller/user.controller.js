import userModel from "../Model/user.model.js";

const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find();
        if (!users) {
            return res.status(401).json({ message: "User not found!" });
        }
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getUserById = async (req, res) => {
    try {
        const user = await userModel.findById(req.params.id);
        if (!user) {
            return res.status(401).json({ message: "User not found!" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const addUserPage = async (req, res) => {
    try {
        res.render("addUser");
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const addUser = async (req, res) => {
    try {
        console.log(req.body);
        const user = new userModel(req.body);
        await user.save();
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateUserPage = async (req, res) => {
    try {
        const user = await userModel.findById(req.params.id);
        res.render("updateUser", { user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateUser = async (req, res) => {
    try {
        const user = await userModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteUserPage = async (req, res) => {
    try {
        const user = await userModel.findById(req.params.id);
        res.render("deleteUser", { user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteUser = async (req, res) => {
    try {
        const user = await userModel.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { getAllUsers, getUserById, addUserPage, addUser, updateUserPage, updateUser, deleteUserPage, deleteUser };