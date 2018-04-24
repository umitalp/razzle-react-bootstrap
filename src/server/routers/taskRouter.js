import express from "express";
import Task from "../models/task";

const taskRouter = express.Router();

const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  res.status(404).json({ message: "Unauthorized. You need to login first." });
};

taskRouter.get("/me", isLoggedIn, (req, res) => {
  Task.find({ author: req.user._id }, (err, tasks) => {
    if (err) return res.sendStatus(500).json({ Message: "Cant find any task" });
    res.json({ Tasks: tasks });
  });
});

taskRouter.post("/add", isLoggedIn, (req, res) => {
  Task.create(
    {
      author: req.user._id,
      content: req.body.content
    },
    err => {
      if (err) res.sendStatus(500).json({ Message: "Cant add new task" });
      res.json({ Message: "New task created." });
    }
  );
});

taskRouter.post("/remove", isLoggedIn, (req, res) => {
  Task.remove({ _id: req.body.id }, function (err) {
    if (err) res.sendStatus(500).json({ Message: "Cant remove task" });
    res.json({ Message: "Task succesfully removed." });
  });
});

export default taskRouter;
