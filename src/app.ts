import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { router } from "./routes";
import { erroMiddleware } from "./Routes/Middlewares/Error/middleware";

const app = express();

const PORT = 8000

app.use(express.json());

app.use(cors());

app.use(router);

app.use(new erroMiddleware().handle);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
