import mysql from "mysql";

// export const connection = mysql.createConnection({
//   host: "http://184.168.100.205",
//   // host: "192.168.1.189",
//   user: "task",
//   password: "Task@123",
//   database: "task",
// });

// export const connection = mysql.createConnection({
//   host: "mysql -h bttaskmanager-server.mysql.database.azure.com -u jufbgypnlr -p {restoredbname}<my_backup.sql",
//   user: "jufbgypnlr",
//   password: "50155V85AEJHY2G4$",
//   database: "bttaskmanager-database",
// });

// export const connection = mysql.createConnection({
//   host: "bttaskmanager-server.mysql.database.azure.com",
//   user: "jufbgypnlr",
//   password: "50155V85AEJHY2G4$",
//   database: "bttaskmanager-database",
//   port: 3306,
// });

// Driver = { ODBC Driver 18 for SQL Server };
// Server = tcp: bttask.database.windows.net, 1433; Database = bttask_db; Uid = bttask; Pwd = { "50155V85AEJHY2G4$"}; Encrypt = yes; TrustServerCertificate = no;
// Connection Timeout = 30;

import "dotenv/config";
export const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST_NAME,
  user: process.env.MYSQL_USER_NAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE_NAME,
});
