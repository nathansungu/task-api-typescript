import { Request, Response, NextFunction } from "express";

export const validateTask = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title, description, isCompleted } = req.body;
    if (!title) {
      res.status(400).json({ message: "Tite is required" });
      return;
    }
    if (!description) {
      res.status(400).json({ message: "Description is required" });
      return;
    }
    if (isCompleted == undefined) {
      res.status(400).json({ message: "Iscompleted status" });
      return;
    }
    next();
  } catch (e) {
    res.status(500).json({ message: "Ooops! Something wrong." });
  }
};
