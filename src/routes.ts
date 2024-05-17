import { Router } from "express";
import taskRouter from "./Routes/task";

const router = Router();

router.use("/production/task", taskRouter);

export { router };
