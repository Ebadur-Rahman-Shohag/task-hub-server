const express = require("express");
const router = express.Router();

const {
    createTask,
    getAllTasks,
    getTaskById,
    getMyTasks,
    updateTask,
    deleteTask
} = require("../controllers/tasksController");

router.post("/", createTask);
router.get("/", getAllTasks);
router.get("/my-tasks", getMyTasks);
router.get("/:id", getTaskById);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
