"use strict";

import userService from "../Services/UserService.js";
import bcryptjs from "bcryptjs";
import { CustomError } from "../utils/CustomError.js";

const getUserByEmail = async (req, res, next) => {
  try {
    const email = req.params.email;
    const user = await userService.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    next(error);
  }
};

const createUser = async (req, res, next) => {
  try {
    const userData = req.body;
    userData.password = await bcryptjs.hash(userData.password, 10);
    console.log(userData.password);
    const newUser = await userService.create(userData);
    res.status(201).json(newUser);
  } catch (error) {
    console.log("This is error code: " + error.statusCode);
    next(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const email = req.params.email;
    const updatedData = req.body;
    const updatedUser = await userService.findOneAndUpdate(
      { email: email },
      updatedData
    );
    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const email = req.params.email;
    await userService.remove({ email: email });
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export default {
  getUserByEmail,
  createUser,
  updateUser,
  deleteUser,
};
