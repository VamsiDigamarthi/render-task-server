import express from "express";
import {
  accessTeamBasedOnId,
  getOneTeamLeader,
  userAccess,
} from "../Controlles/TeamLeaderController.js";

const router = express.Router();
router.post("/user", userAccess);
router.get("/admin/team/:id", accessTeamBasedOnId);

// admin get one team leader

router.post("/oneteamleader", getOneTeamLeader);

// router.get("/admin/team/:id", accessTeamBasedOnId);

export default router;
