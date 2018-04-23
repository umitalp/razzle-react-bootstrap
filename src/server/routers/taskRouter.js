import express from "express";

const taskRouter = express.Router();

const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  res.status(404).json({ message: "Unauthorized." });
};

taskRouter.get("/me", isLoggedIn, (req, res) => {
  // Req.user is here
  console.log('Get my tasks', req.body)
});

taskRouter.post("/add", isLoggedIn, (req, res) => {
  // Req.user is here
  console.log('Add new task', req.body, req.user)
});

taskRouter.post("/remove", isLoggedIn, (req, res) => {
  // Req.user is here
  console.log('Remove task', req.body, req.user)
});

taskRouter.post("/update", isLoggedIn, (req, res) => {
  // Req.user is here
  console.log('Update task', req.body, req.user)
});

export default taskRouter;
