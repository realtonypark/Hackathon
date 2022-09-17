import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import landRoutes from "./routes/land.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cookieParser());
app.use(cors());

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Database connected successfully");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose connection is disconnected");
});

app.use(cookieParser());
app.use(express.json());

app.use("/lands", landRoutes);

app.use((req, res, next) => {
    res.header( "Access-Control-Allow-Origin" );
    console.log("Middleware Used");
})

app.listen(8800, () => {
    connect();
    console.log("Connected to Backend");
})