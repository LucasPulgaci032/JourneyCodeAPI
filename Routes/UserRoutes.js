import UserController from "../controllers/user.js";
import express from "express"
import verifyToken from "../middlewares/VerifyToken.js";

const userRouter = express.Router()


userRouter.get('/',verifyToken, UserController.findUser)
userRouter.post('/register', UserController.postUser)
userRouter.post('/login', UserController.validateUser)
userRouter.patch('/usertopic/:id', UserController.patchTopicProgress)
userRouter.get('/:id',verifyToken, UserController.findUserById)
userRouter.delete('/:id',verifyToken, UserController.deleteById)
export default userRouter; 