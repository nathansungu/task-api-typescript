import express, {  Express } from "express";
import task from './scr/routers/task.router'

const app = express();
app.use(express.json());


app.get("/", (_req, res) => {
  res.status(200).json("<h1>Welcome to Tasks page</h1>");
  return;
})



app.use('/tasks',task)
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port})`);
});
