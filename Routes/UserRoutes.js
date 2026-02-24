import UserController from "../controllers/user.js";
import express from "express"

const userRouter = express.Router()


userRouter.get('/', UserController.findUser)
userRouter.post('/', UserController.postUser)
userRouter.post('/login', UserController.validateUser)
userRouter.patch('/usertopic/:id', UserController.patchTopicProgress)
userRouter.get('/:id', UserController.findUserById)
userRouter.delete('/:id',UserController.deleteById)
export default userRouter; 