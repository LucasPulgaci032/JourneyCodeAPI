
import RoadmapControllers from '../controllers/index.js'
import express from 'express';

const router = express.Router()

router.get('/',RoadmapControllers.listData)
router.get('/:id',RoadmapControllers.listDataId)
router.post('/',RoadmapControllers.postData)


export default router;