
import roadmapRouter from "./RoadmapRoutes.js";
import topicsRouter from "./TopicsRoutes.js";


const router = (app) => {
    app.route('/').get((req,res) =>
        res.status(200).send("funfou")
    )
   
    app.use('/roadmaps',roadmapRouter)
    app.use('/topics',topicsRouter)
    
}

export default router