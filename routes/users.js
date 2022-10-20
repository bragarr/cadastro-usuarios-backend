import express from "express";

import { getUsers, addNewUser, updateUser, deleteUser } from "../controller/user.js";

const router = express.Router();

router.get("/", getUsers);

router.post("/", addNewUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

export default router;