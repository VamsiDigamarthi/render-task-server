import { connection } from "../Database/Database.js";

export const registerUser = (req, res) => {
  const { username, password, name, profilePic, role, head, designation } =
    req.body;
  const exitSql = "SELECT * FROM `users` WHERE username = ?";
  try {
    connection.query(exitSql, [username], (err, result) => {
      if (err) return err;
      if (result.length) {
        return res.status(500).json({
          resp: true,
          msg: "User Already Exist",
        });
      } else {
        const sql =
          "INSERT INTO users(username,password,name,role,designation,profilepic,head) VALUES(?,?,?,?,?,?,?)";
        connection.query(
          sql,
          [username, password, name, role, designation, profilePic, head],
          (err, result) => {
            if (err) {
              return res.status(200).json({
                resp: true,
                msg: err,
              });
            }
            return res.status(200).json({
              resp: true,
              msg: "Registration Successfully ..!",
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

//

export const login = (req, res) => {
  const { username } = req.body;
  const sql = "SELECT * FROM `users` WHERE username = ?";
  try {
    connection.query(sql, [username], (err, result) => {
      if (err) {
        throw err;
      } else {
        if (result.length) {
          if (result[0]?.password === req.body.password) {
            return res.status(200).json(result);
          } else {
            res.status(500).json("password does't correct");
          }
        } else {
          res.status(500).json("user does't exist ....! ");
        }
      }
    });
  } catch (e) {
    console.log(e);
  }
};

// profile edit router controller

export const profileEditRouter = async (req, res) => {
  const id = req.params.id;
  const { profilepic, name, designation } = req.body;

  const sql =
    "UPDATE `users` SET profilepic = ?, name = ?, designation = ?  WHERE id = ?";

  try {
    connection.query(
      sql,
      [profilepic, name, designation, id],
      (err, result) => {
        if (err) {
          return res.status(500).json({
            msg: err,
          });
        } else {
          // console.log(result);
          res.status(200).json("Profile update successfully ...!");
        }
      }
    );
  } catch (error) {
    return res.status(500).json({
      msg: error,
    });
  }
};

// project click corresponding assign user fetch data

export const fetchProjectClickCorrespondingUser = async (req, res) => {
  const id = req.params.id;

  const sql =
    "SELECT *  FROM `tasks` INNER JOIN `users` ON tasks.username = users.username WHERE project_id = ?";

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

export const projectIdAddedToEmployee = async (req, res) => {
  const { id, projectId } = req.body;
  // console.log(id);
  // console.log(projectId);
  // try {
  //   const userDetails = await UserModel.findById(id);
  //   // console.log(userDetails);

  //   if (userDetails.project_id.includes(projectId)) {
  //     await userDetails.updateOne({ $pull: { project_id: projectId } });
  //     res.status(200).json("project_id remove successfully");
  //   } else {
  //     await userDetails.updateOne({ $push: { project_id: projectId } });
  //     res.status(200).json("project_id added successfully");
  //   }
  // } catch (error) {
  //   res.status(500).json(error);
  // }
};

// project id fetch one employee

export const fetchOneEmployee = async (req, res) => {
  const id = req.params.id;
  //console.log(id);
  // try {
  //   const userDetails = await UserModel.findById(id);
  //   res.status(200).json(userDetails);
  // } catch (e) {
  //   res.status(500).json(e);
  // }
};

// admin delete team leader

export const adminDeleteTeamLeader = async (req, res) => {
  const id = req.params.id;

  const sql = "DELETE FROM `users` WHERE id = ?";

  try {
    connection.query(sql, [req.params.id], (err, result) => {
      if (err) {
        return res.status(500).json({
          msg: err,
        });
      } else {
        // console.log(result);
        res.status(200).json("delete user successfully ...!");
      }
    });
  } catch (error) {
    return res.status(500).json({
      msg: error,
    });
  }

  // try {
  //   const userDetails = await UserModel.findByIdAndDelete(id);
  //   res.status(200).json("user Delete Successfully");
  // } catch (e) {
  //   res.status(500).json(e);
  // }
};
