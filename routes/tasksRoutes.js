const express = require("express");
const router = express.Router();

const {
    createTask,
    getAllTasks,
    getTaskById,
    getMyTasks
} = require("../controllers/tasksController");

router.post("/", createTask);
router.get("/", getAllTasks);
router.get("/my-tasks", getMyTasks);
router.get("/:id", getTaskById);

module.exports = router;
