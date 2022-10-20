import express from "express";

import { getUsers, addNewUser, updateUser, deleteUser } from "../controller/user.js";

const router = express.Router();

router.get("/", getUsers);

router.get("/", addNewUser);

router.get("/:id", updateUser);

router.get("/:id", deleteUser);

export default router;