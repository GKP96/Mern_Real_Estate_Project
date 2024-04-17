import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import UserRouter from "./routes/UserRouter.js";

const app = express();
app.use(bodyParser.json());
app.use("/users", UserRouter);
const url = "mongodb://localhost:27017/realestate";
mongoose.connect(url);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error: "));
db.once("open", function () {
  console.log("Database Connected successfully");
});

const port = process.env.PORT || 5050;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
