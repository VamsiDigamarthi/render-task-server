import { connection } from "../Database/Database.js";

export const addTimeToTask = async (req, res) => {
  const { projectId, taskName, taskValue, timer, totalHour, userName } =
    req.body;

  // console.log("timer api");
  const exitTask = "SELECT * FROM `times` WHERE taskValue = ? ";

  try {
    connection.query(exitTask, [taskValue], (err, result) => {
      if (err) return err;
      if (result.length) {
        const sql =
          "UPDATE `times` SET timer = ? , totalHour = ? WHERE taskValue = ?";
        connection.query(sql, [timer, totalHour, taskValue], (err, result) => {
          if (err) {
            return res.status(500).json({
              msg: err,
            });
          }
          return res.status(200).json({
            resp: true,
            msg: "timer updated successfully ..!",
          });
        });
      } else {
        const sql =
          "INSERT INTO `times`(projectId,taskValue,timer,totalHour,taskName,userName) VALUES(?,?,?,?,?,?)";
        connection.query(
          sql,
          [projectId, taskValue, timer, totalHour, taskName, userName],
          (err, result) => {
            if (err) {
              return res.status(500).json({
                msg: err,
              });
            }
            return res.status(200).json({
              resp: true,
              msg: "timer Added successfully ..!",
            });
          }
        );
      }
    });
  } catch (error) {
    return res.status(500).json({
      msg: error,
    });
  }
};

export const timerGetByIdTaskId = async (req, res) => {
  const id = req.params.id;

  const sql = "SELECT * FROM `times` WHERE taskValue = ? ";

  try {
    connection.query(sql, [id], (error, result) => {
      if (error) {
        return res.status(500).json({
          msg: error,
        });
      } else {
        return res.status(200).json(result);
      }
    });
  } catch (error) {
    return res.status(500).json({
      msg: error,
    });
  }

  // try {
  //   const userDetails = await TimerModel.find({ taskValue: id });
  //   res.status(200).json(userDetails);
  // } catch (e) {
  //   res.status(500).json(e);
  // }
};

export const timerGetById = async (req, res) => {
  const id = req.params.id;

  const sql = "SELECT * FROM `times` WHERE projectId =? ";
  try {
    connection.query(sql, [id], (error, result) => {
      if (error) {
        return res.status(500).json({
          msg: error,
        });
      } else {
        return res.status(200).json(result);
      }
    });
  } catch (error) {
    return res.status(500).json({
      msg: error,
    });
  }

  // try {
  //   const userDetails = await TimerModel.find({ projectId: id });
  //   res.status(200).json(userDetails);
  // } catch (e) {
  //   res.status(500).json(e);
  // }
};

export const timerDeleteByIdTaskId = async (req, res) => {
  const id = req.params.id;

  const sql = "DELETE FROM `tasks` WHERE taskValue = ?";

  try {
    connection.query(sql, [id], (err, result) => {
      if (err) {
        return res.status(500).json({
          msg: err,
        });
      } else {
        res.status(200).json("task deleted successfully ...!");
      }
    });
  } catch (error) {
    return res.status(500).json({
      msg: error,
    });
  }

  // try {
  //   // await TimerModel.findOneAndDelete({ taskValue: id });
  //   await TimerModel.deleteMany({ taskValue: id });
  //   res.status(200).json("timer delete successfully.....");
  // } catch (e) {
  //   res.status(500).json(e);
  // }
};
