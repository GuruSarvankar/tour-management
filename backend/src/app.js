import express from "express";
import { toursRoutes } from "./routes/tours.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());

toursRoutes(app);

export { app };
