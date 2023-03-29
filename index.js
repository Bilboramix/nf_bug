import * as dotenv from "dotenv";
import morgan from "morgan";
import express from "express";
import cors from "cors";
import formidable from "express-formidable";
import test from "./src/test.js";

dotenv.config();

const expressApp = express();
expressApp.use(morgan("dev"));
expressApp.use(formidable());
expressApp.use(cors());

expressApp.get("/", (req, res) => {
  res.json("Hello World");
});

expressApp.use(test);

expressApp.listen(process.env.HTTP_PORT || 3310, () => {
  console.log(`Server running on port ${process.env.HTTP_PORT || 3310}`);
});
