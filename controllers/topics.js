import { Topic } from "../models/AboutTopics.js";

class TopicsController {
    static async listTopic(req,res,next){
        try{
            const dados = await Topic.find({})
            res.status(200).send(dados)
        }catch(error){
            next(error)
        }
    }

    static async listTopicById(req,res,id,next){
        try{
            const id = req.params.id
            const findData = await Topic.findById(id)
            res.status(200).send(findData)
        }catch(error){
            next(error)
        }
    }
    static async postTopic(req,res,next){
        try{
            const body = await Topic.create(req.body)
            res.status(201).send(body)
        }catch(error){
            next(error)
        }
    }
}



export default TopicsController