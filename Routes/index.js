
import roadmapRouter from "./RoadmapRoutes.js";
import topicsRouter from "./TopicsRoutes.js";
import userRouter from "./userRoutes.js";
import dotenv from 'dotenv'

dotenv.config()
const usrt = process.env.USER_ACCESS_ROUTE

const router = (app) => {
    app.route('/').get((req,res) =>
        res.status(200).send("funfou")
    )
   
  
    app.use('/roadmaps',roadmapRouter)
    app.use('/topics',topicsRouter)
    app.use(usrt, userRouter)
}

export default router