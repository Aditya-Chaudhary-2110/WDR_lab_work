import mysql from "mysql2/promise";
// to create a pool to handle multiple connection request
const pool = mysql.createPool({
  host: "localhost",
  username: "root",
  password: "12345",
  database: "studentManagment",
  connectionLimit: "10",
  waitForConnections: "true",
});

// create the function to establish connection
async function establishConnection() {
  try {
    // to establish connection
    con = pool.getConnection();
    // to display connection
    console.log("connected to mySql");
    con.release();
  } catch (err) {
    console.log("unable to connect with database", err);
  }
}

establishConnection();

export default pool;
