import express from 'express';

const userRouter = express.Router();

/* GET ALL USERS */
userRouter.get('/all', (req, res) => {
    res.json({ message: 'Authorization failed' })
})

/* GET USER BY ID */
userRouter.get('/me', (req, res) => {
    res.json({ message: 'You?' })
})

/* LOGIN USER */
userRouter.post('/login', (req, res) => {
    res.json({ token: 'Bearer fake_token' })
})

/* CREATE USER */
userRouter.post('/create', (req, res) => {
    res.json({
        message: 'Created',
        username: 'Your name',
        email: 'Your email'
    })
})

export default userRouter
