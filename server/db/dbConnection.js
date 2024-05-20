import sql from "mssql";
import dotenv from 'dotenv';
dotenv.config();
const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER_IP, // You can use 'localhost\\instance' to connect to named instance
  database: process.env.DB_DATABASE,
  options: {
    trustServerCertificate: true,
    trustedConnection: true, 
    encrypt: true,
  },
};
let pool = null;
export const initializeDbConnection = async () => {
    try {
        // Connect to the database
        pool = sql.connect(config);
        console.log("Connected to MSSQL database");
        return pool;
    } catch (err) {
        console.error("Error connecting to MSSQL database:", err);
        throw err; // Rethrow the error to handle it elsewhere in your application
    }
};

export const getDbConnection = async() => {
    if (!pool) {
       await initializeDbConnection();
       return pool;
        // throw new Error("Database connection not initialized. Call initializeDbConnection first.");
    }
    return pool;
};
