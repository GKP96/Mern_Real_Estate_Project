"use strict";

import userService from "../Services/UserService.js";

const getUserByEmail = async (req, res) => {
  try {
    const email = req.params.email;
    const user = await userService.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const createUser = async (req, res) => {
  try {
    const userData = req.body;
    const newUser = await userService.create(userData);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
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
let returnName = (req, res) => {
  res.json({
    name: "Gautam Kr. Pandey",
  });
};
export default {
  getUserByEmail,
  createUser,
  updateUser,
  deleteUser,
  returnName,
};
