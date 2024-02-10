import { connection } from "../Database/Database.js";

export const userAccess = async (req, res) => {
  const { role } = req.body;
  // console.log(role);
  const sql = "SELECT * FROM `users` WHERE head = ?";

  try {
    connection.query(sql, [role], (err, result) => {
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

export const accessTeamBasedOnId = async (req, res) => {
  const id = req.params.id;
  // console.log(id);
  const sql = "SELECT * FROM `users` WHERE head = ?";
  try {
    connection.query(sql, [id], (err, result) => {
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

//admin get one team leader in teams folder

export const getOneTeamLeader = async (req, res) => {
  const { role } = req.body;
  // console.log(role);

  const sql = "SELECT * FROM `users` WHERE username = ? ";

  try {
    connection.query(sql, [role], (err, result) => {
      if (err) {
        return res.status(500).json({
          msg: err,
        });
      } else {
        res.status(200).json(result);
      }
    });
  } catch (error) {
    return res.status(500).json({
      msg: error,
    });
  }

  // try {
  //   // const usersList = await UserModel.find({ role: role });
  //   const usersList = await UserModel.find({ username: role });
  //   res.status(200).json(usersList);
  // } catch (e) {
  //   res.status(400).json(e);
  // }
};

export const deleteTask = async (req, res) => {
  const id = req.params.id;

  const sql = "DELETE FROM `tasks` WHERE id = ?";

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
  //   const updateT = await TaskModel.findByIdAndDelete(id);
  //   res.status(200).json("Delete task successfully");
  // } catch (e) {
  //   res.status(400).json(e);
  // }
};
