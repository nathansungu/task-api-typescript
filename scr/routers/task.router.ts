import { Router } from "express";
import {getTasks, getTaskById,addTask,deleteTask,updateTask,patcheTask} from '../controllers/task.controller'
import { validateTask } from "../middleware/validateTask";
const router = Router();

router.get("/",getTasks);
router.post("/",validateTask,addTask);
router.get("/:id", getTaskById);
router.put("/:id", updateTask);
router.patch("/:id",patcheTask);
router.delete("/:id", deleteTask)

export default router;

