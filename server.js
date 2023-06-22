import express from 'express';
import colors from 'colors';
import dotenv from "dotenv";
import morgan from 'morgan';
import connectDb from './config/db.js';
import authRoutes from './routes/authRoute.js';

// configure env
dotenv.config();

// database config
connectDb();

// rest object
const app = express();

// middlewares
app.use(express.json());
app.use(morgan('dev'));

// routes
app.use("/api/v1/auth", authRoutes);

// Rest API
app.get('/', (req, res) => {
    res.send("<h1> Welcome to MERN Stack App </h1>")
})

// Port
const PORT = process.env.PORT || 8080;

// run listen
app.listen(PORT, () => {
    console.log(`Server Running On ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white);
})