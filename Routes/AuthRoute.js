import express from "express";
import {
  adminDeleteTeamLeader,
  fetchOneEmployee,
  fetchProjectClickCorrespondingUser,
  login,
  profileEditRouter,
  projectIdAddedToEmployee,
  registerUser,
} from "../Controlles/AuthController.js";

const router = express.Router();

router.post("/register", registerUser); // uploadMiddleware.single("profilePic"),
router.post("/login", login);
router.put("/profile/edit/:id", profileEditRouter);

router.get("/project/click/user/:id", fetchProjectClickCorrespondingUser);

//project added to employee user

router.post("/project/:id", projectIdAddedToEmployee);

router.get("/project/:id", fetchOneEmployee);

router.delete("/admin/team/delete/:id", adminDeleteTeamLeader);

export default router;
