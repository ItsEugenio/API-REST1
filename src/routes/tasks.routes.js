import { Router } from "express";

import * as taskController from "../controllers/task.controller";

const rateLimit = require("express-rate-limit");

const accountLimiter = rateLimit({
    windowMs: 60 * 60 * 1000,
    max: 6, 
    message: "Demasiadas peticiones realizadas, intenta despues de 1 hora"
  });

const router = Router();



router.get("/", accountLimiter,taskController.getAllTasks);

router.post("/", accountLimiter,taskController.createTask);

router.get("/done", taskController.findAllDoneTask);

router.get("/:id", accountLimiter,taskController.findOneTask);

router.delete("/:id", taskController.deleteTask);

router.put("/:id", taskController.updateTask);

export default router;
