import express from "express";
import {
  actualCreateDate,
  addTask,
  editTask,
  editUserTask,
  newAdmingetTeamLeaderTask,
} from "../Controlles/TaskController.js";
import { deleteTask } from "../Controlles/TeamLeaderController.js";
const router = express.Router();
router.post("/addtaks", addTask);
// get team leader task based on there username or email
router.post("/teamleader/task", newAdmingetTeamLeaderTask);

// edit task

router.put("/:id", editTask);

router.delete("/delete/:id", deleteTask);
router.post("/actual/date/:id", actualCreateDate);

router.put("/description/edit/:id", editUserTask);

export default router;
