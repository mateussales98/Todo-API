import { Router } from "express";
import { taskController } from "../Controller/Task/controller";

const taskRouter = Router();
const controller = new taskController();

taskRouter.get("/", controller.findAll);

taskRouter.get("/:id", controller.find);

taskRouter.post("/", controller.create);

taskRouter.put("/:id", controller.update);

taskRouter.patch("/:id",controller.complete);

taskRouter.delete("/:id", controller.exclude);

export default taskRouter;
