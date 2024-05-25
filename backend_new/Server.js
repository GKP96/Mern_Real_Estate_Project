import dotenv from "dotenv";
dotenv.config();

import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import cors from "cors";
import UserRouter from "./routes/UserRouter.js";
import PropertyRouter from "./routes/PropertyRouter.js";
const options = [
  cors({
    origin: "*",
    methods: "*",
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  }),
];

const app = express();
app.use(options);
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use("/users", UserRouter);
app.use("/properties", PropertyRouter);
app.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    status: err.statusCode || 500,
    success: false,
  });
});
const url =
  "mongodb+srv://Gautama:Gaunik%401234@cluster1.txuuzz9.mongodb.net/Presido?retryWrites=true&w=majority&appName=Cluster1";
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
