import bodyParser from "body-parser";
import express from "express";

//config
import connectDB from './config/connectDb.js'
import userRoutes from './routes/userRoutes.js';
import BlogRouter from './routes/blogRoutes.js'
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser());
connectDB()
// Routes
app.use("/api/user", userRoutes);
app.use("/api/blog", BlogRouter);
const port = 5000;
app.listen(port, () => console.log(`Server started on ${port}`));