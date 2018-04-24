import express from "express";
import passport from "passport";

const userRouter = express.Router();

const isLoggedIn = (req, res, next) => {
  // if user is authenticated in the session, carry on
  if (req.isAuthenticated()) return next();
  res.status(404).json({ message: "Unauthorized." });
};

userRouter.get("/me", isLoggedIn, (req, res) => {
  res.json(req.user);
});

userRouter.get("/logout", (req, res) => {
  req.logOut();
  res.json({ message: "Logged out seccesfully." });
});

userRouter.post("/login", (req, res, next) => {
  passport.authenticate("local-login", (err, user, info) => {
    if (err) res.status(500).json(err);
    if (!user) {
      res.status(500).json(info);
    } else if (user) {
      req.logIn(user, err => {
        if (err) return next(err);
        return res.status(200).json(user);
      });
    }
  })(req, res, next);
});

userRouter.post("/signup", (req, res, next) => {
  passport.authenticate("local-signup", (err, user, info) => {
    if (err) res.status(500).json(err);
    if (!user) {
      res.status(500).json(info);
    } else if (user) {
      req.logIn(user, err => {
        if (err) return next(err);
        return res.status(200).json(user);
      });
    }
  })(req, res, next);
});

export default userRouter;
