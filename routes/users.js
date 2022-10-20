import express from "express";

import { getUsers, addNewUser, updateUser, deleteUser } from "../controller/user.js";

const router = express.Router();

router.get("/", getUsers);

router.get("/", getUsers);

router.get("/:id", getUsers);

router.get("/:id", getUsers);

export default router;