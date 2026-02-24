import TopicsController from "../controllers/topics.js";
import express from 'express'

const topicsRouter = express.Router()

topicsRouter.get('/',TopicsController.listTopic);
topicsRouter.post('/',TopicsController.postTopic)
topicsRouter.delete('/migration/old-fields',TopicsController.deleteOldTopics)
topicsRouter.get("/lang", TopicsController.findTopicByRoadmapName)
topicsRouter.get('/:id',TopicsController.listTopicById);
topicsRouter.put('/:id', TopicsController.putTopic);
topicsRouter.patch('/:id',TopicsController.patchTopic);

export default topicsRouter;