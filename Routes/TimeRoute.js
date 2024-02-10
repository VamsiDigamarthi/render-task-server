import express from "express";
import {
  addTimeToTask,
  timerDeleteByIdTaskId,
  timerGetById,
  timerGetByIdTaskId,
} from "../Controlles/TimeController.js";

const router = express.Router();
router.post("/value", addTimeToTask);
router.get("/taskvalue/:id", timerGetByIdTaskId);

router.get("/value/:id", timerGetById);

router.delete("/delete/timer/:id", timerDeleteByIdTaskId);
export default router;
