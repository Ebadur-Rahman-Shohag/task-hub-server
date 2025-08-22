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
        const { email } = req.body;
        if (!email) {
            return res.status(400).json({ error: "Email is required" });
        }
        const tasks = await Task.find({ email: email });
        res.status(200).json({ tasks });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = {
    createTask,
    getAllTasks,
    getTaskById,
    getMyTasks
};
