import { Router } from "express";
import taskRouter from "./Routes/Task";
import { erroMiddleware } from "./Routes/Middlewares/Error/middleware";

const router = Router();

router.use("/task", new erroMiddleware().handleAsync(taskRouter));

export { router };
