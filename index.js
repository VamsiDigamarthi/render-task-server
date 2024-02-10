import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { connection } from "./Database/Database.js";
import AuthRoute from "./Routes/AuthRoute.js";
import TaskRoute from "./Routes/TaskRoute.js";
import TeamRoute from "./Routes/TeamRoute.js";

import TimeRoute from "./Routes/TimeRoute.js";
// import LoginTimerRoute from "./Routes/LoginTimeRoute.js";
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const PORT = "8080";

connection.connect(function (err) {
  if (err) {
    console.log(err);
  } else {
    app.listen(PORT, () => {
      console.log(`app listen port number ${PORT}...!`);
    });
  }
});

app.get("/", (req, res) => {
  res.json("hellow wordl");
});

app.use("/auth", AuthRoute);

app.use("/tasks", TaskRoute);

// //
app.use("/team", TeamRoute);

app.use("/time", TimeRoute);

// app.use("/login", LoginTimerRoute);
