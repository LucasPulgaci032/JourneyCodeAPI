
import RoadmapControllers from '../controllers/index.js'
import express from 'express';

const roadmapRouter = express.Router()


roadmapRouter.get('/',RoadmapControllers.listData)
roadmapRouter.post('/',RoadmapControllers.postData)
roadmapRouter.get('/lang', RoadmapControllers.findByKey)
roadmapRouter.get('/:id',RoadmapControllers.listDataId)
roadmapRouter.put('/:id',RoadmapControllers.putData)
roadmapRouter.patch('/:id',RoadmapControllers.patchData)
roadmapRouter.delete('/:id', RoadmapControllers.deleteData)

export default roadmapRouter;

///roadmaps/language → rota específica
//roadmaps/:lang     → rota genérica
//Rotas estáticas SEMPRE vêm antes de rotas dinâmicas (/:param).
//Porque rotas dinâmicas capturam QUALQUER string e engolem o restante.