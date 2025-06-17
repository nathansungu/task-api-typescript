import { Response, Request } from "express";
import { PrismaClient, task } from "@prisma/client";

const client = new PrismaClient();
//get all tasks
export const getTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await client.task.findMany({
      where: { isDeleted: false },
    });
    res.status(200).json({ data: tasks });
    return;
  } catch (e) {
    console.log(e);
    res.status(500).json("Oops! Something went wrong.");
    return;
  }
};

//specific task
export const getTaskById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const task = await client.task.findUnique({
      where: { id: id },
    });
    res.status(200).json({ data: task });
    return;
  } catch (error) {
    res.status(200).json("Opps! Something went wrong");
  }
};

//add task
export const addTask = async (req: Request, res: Response) => {
  try {
    const { title, isCompleted, description } = req.body;
    const newTask = await client.task.create({
      data: { title, isCompleted, description },
    });
    res.status(201).json({ newTask });
    return;
  } catch (e) {
    console.log(e);
    res.status(500).json("Ooops! Something went wrong.");
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await client.task.update({
      where: { id: id },
      data: { isDeleted: true },
    });
    res.status(200).json({ message: "Product deleted." });
    return;
  } catch (e) {
    res.status(500).json({ message: "Ooops! Something went wrong." });
    return;
  }
};

export const updateTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, description, isCompleted } = req.body;
    const update = await client.task.update({
      where: { id: id },
      data: { title, description, isCompleted },
    });
    if (update) {
      res.status(200).json({ message: "Updated succesfully.", data: update });
      return;
    }
  } catch (e) {
    console.log(e)
    res.status(500).json({ message: "Ooops! Something went wrong." });
    return
  }
};

export const patcheTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, description, isComplete } = req.body;
    const patched = await client.task.update({
      where: { id: id },
      data: {
        title: title && title,
        description: description && description,
        isCompleted: isComplete && isComplete,
      },
    });
    if (patched) {
      res.status(200).json({ data: { patched } });
      return;
    }
  } catch (e) {
    res.status(500).json({ message: "Ooops! Something went wrong." });
    return;
  }
};
