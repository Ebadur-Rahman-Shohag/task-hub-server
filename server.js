const express = require("express");
const app = express();
const connectDB = require("./db/connect");
require("dotenv").config();
const cors = require("cors");
const tasksRouter = require("./routes/tasksRoutes");

// middleware
app.use(express.json());
app.use(cors());

// routes
app.use("/api/v1/tasks", tasksRouter);

const PORT = process.env.PORT || 3000;
const MONGODB_URL = process.env.MONGODB_URI;
console.log(MONGODB_URL);

const startServer = async () => {
    try {
        await connectDB(MONGODB_URL);
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
};

startServer();
