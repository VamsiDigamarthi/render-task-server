import { connection } from "../Database/Database.js";

export const addTask = async (req, res) => {
  const {
    head,
    task,
    status,
    username,
    description,
    date,
    createdate,
    project_id,
  } = req.body;
  const sql =
    "INSERT INTO `tasks`(project_id, description,username,head,status,date,createdate,task) VALUES(?,?,?,?,?,?,?,?)";
  try {
    connection.query(
      sql,
      [project_id, description, username, head, status, date, createdate, task],
      (err, result) => {
        if (err) {
          return res.status(200).json({
            resp: true,
            msg: err,
          });
        }
        return res.status(200).json({
          resp: true,
          msg: "Task Added Successfully ... !",
        });
      }
    );
  } catch (error) {
    return res.status(500).json({
      msg: error,
    });
  }
};

export const newAdmingetTeamLeaderTask = async (req, res) => {
  const { username } = req.body;
  const sql = "SELECT * FROM `tasks` WHERE username = ?";

  try {
    connection.query(sql, [username], (err, result) => {
      if (err) {
        return res.status(500).json({
          msg: err,
        });
      } else {
        // console.log(result);
        res.status(200).json(result);
      }
    });
  } catch (error) {
    return res.status(500).json({
      msg: error,
    });
  }
};

// edit task

export const editTask = async (req, res) => {
  const id = req.params.id;
  const { updatedDate, status } = req.body;
  const sql = "UPDATE `tasks` SET updatedDate	 = ?, status = ?  WHERE id = ?";
  try {
    connection.query(sql, [updatedDate, status, id], (err, result) => {
      if (err) {
        return res.status(500).json({
          msg: err,
        });
      } else {
        // console.log(result);
        res.status(200).json("task updated successfully ... !");
      }
    });
  } catch (error) {
    return res.status(500).json({
      msg: error,
    });
  }
};

// actual create date and actual expert date set api call

export const actualCreateDate = async (req, res) => {
  const id = req.params.id;

  const { actualComDate, actualExptDate } = req.body;

  const sql =
    "UPDATE `tasks` SET actualComDate = ? , actualExptDate= ? WHERE id =? ";

  try {
    connection.query(
      sql,
      [actualComDate, actualExptDate, id],
      (err, result) => {
        if (err) {
          return res.status(500).json({
            msg: err,
          });
        } else {
          // console.log(result);
          res.status(200).json("task updated successfully ... !");
        }
      }
    );
  } catch (error) {
    return res.status(500).json({
      msg: error,
    });
  }

  // try {
  //   const updateT = await TaskModel.findByIdAndUpdate(id, req.body, {
  //     new: true,
  //   });
  //   res.status(200).json(updateT);
  // } catch (e) {
  //   res.status(400).json(e);
  // }
};

export const editUserTask = (req, res) => {
  // console.log(req.params.id);
  const sql = "UPDATE `tasks` SET description = ? WHERE id = ?";
  try {
    connection.query(
      sql,
      [req.body.description, req.params.id],
      (err, result) => {
        if (err) {
          return res.status(500).json({
            err,
          });
        } else {
          res.status(200).json("edit task description successfully ..!");
        }
      }
    );
  } catch (error) {
    return res.status(500).json({
      error,
    });
  }
};
