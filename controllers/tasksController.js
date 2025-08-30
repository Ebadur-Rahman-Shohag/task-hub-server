const { Task } = require("../models/tasksModel");

// Create a new task in the database
const createTask = async (req, res) => {
    try {
        const newTask = await Task.create(req.body);
        res.status(201).json({ task: newTask });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Get all the tasks from the database
const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json({ tasks });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Get a task by ID
const getTaskById = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ error: "Task not found" });
        }
        res.status(200).json({ task });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Get only the task I added
const getMyTasks = async (req, res) => {
    try {
        const { email } = req.query; // e.g. /api/my-tasks?email=user@example.com
        if (!email) return res.status(400).json({ message: "Email required" });

        const tasks = await Task.find({ email: email });
        res.status(200).json({ tasks });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update a task
const updateTask = async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!updatedTask) {
            return res.status(404).json({ error: "Task not found" });
        }
        res.status(200).json({ task: updatedTask });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Delete a task
const deleteTask = async (req, res) => {
    try {
        const deletedTask = await Task.findByIdAndDelete(req.params.id);
        if (!deletedTask) {
            return res.status(404).json({ error: "Task not found" });
        }
        res.status(200).json({ task: deletedTask });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = {
    createTask,
    getAllTasks,
    getTaskById,
    getMyTasks,
    updateTask,
    deleteTask,
};
