import express from "express";
import cors from "cors";
import userRoutes from './routes/routes.js';
import path from 'path';
import dotenv from 'dotenv';
import {initializeDbConnection} from './db/dbConnection.js';
dotenv.config();
const app = express();
const PORT = process.env.PORT | 3001;
await initializeDbConnection();
// Serve static files from the 'upload' directory
const __dirname = path.dirname(new URL(import.meta.url).pathname);
app.use("/api/pdf",express.static(path.join(__dirname, 'uploads')));

app.use(cors());
app.use(express.json());


app.use('/api/v1',userRoutes);

app.get("/api/v1/test",(req,res)=>{
    res.status(200).json("Ok");
})


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
