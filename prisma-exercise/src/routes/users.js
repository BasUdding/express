import { Router } from "express";
import getUsers from "../services/users/getUsers.js";
import createUser from "../services/users/createUser.js";
import getUserById from "../services/users/getUserById.js";
import deleteUserById from "../services/users/deleteUserById.js";
import updateUserById from "../services/users/updateUserById.js";
import auth from "../middleware/auth.js";

const router = Router();

router.get("/", (req, res) => {
  const users = getUsers();
  res.json(users);
});

router.post("/", auth, (req, res) => {
  const { name, password, username, image } = req.body;
  const newUser = createUser(username, name, password, image);
  res.status(201).json(newUser);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const user = getUserById(id);

  if (!user) {
    res.status(404).json({ message: `User with id ${id} not found` });
  } else {
    res.status(200).json(user);
  }
});

router.delete("/:id", auth, (req, res) => {
  const { id } = req.params;
  const user = deleteUserById(id);

  if (user) {
    res.status(200).send({
      message: `User with id ${id} successfully deleted`,
      user,
    });
  } else {
    res.status(404).json({
      message: `User with id ${id} not found`,
    });
  }
});

router.put("/:id", auth, (req, res) => {
  const { id } = req.params;
  const { name, password, username, image } = req.body;
  const user = updateUserById(id, { name, password, username, image });

  if (user) {
    res.status(200).send({
      message: `User with id ${id} successfully updated`,
      user,
    });
  } else {
    res.status(404).json({
      message: `User with id ${id} not found`,
    });
  }
});

export default router;
