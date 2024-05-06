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
    console.log(userData);
    userData.password = await bcryptjs.hash(userData.password, 10);
    console.log(userData.password);
    const newUser = await userService.create(userData);
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.id)
    return next(CustomError(401, "You can only update your own account!"));
  try {
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }

    const updatedUser = await userService.findOneAndUpdate(
      {_id: req.params.id},
      req.body
    );
    // remove password from response
    console.log(updatedUser._doc);
    const { password, ...rest } = updatedUser._doc;

    res.status(200).json(rest);
  } catch (error) {
    next(error);
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
const signIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    const user = await userService.findOne({ email: email });
    console.log(user);
    if (!user) {
      console.log("User not found", user);
      return next(CustomError("User not found", 404));
    }
    if (!bcryptjs.compareSync(password, user.password)) {
      return next(CustomError("Invalid password", 400));
    }
    const token = await userService.generateToken(user);
    console.log(token);
    res.json({ success: true, user, token: token });
  } catch (error) {
    next(error);
  }
};

export default {
  getUserByEmail,
  createUser,
  updateUser,
  deleteUser,
  signIn,
};
