import { Topic } from "../models/AboutTopics.js";

class TopicsController {
    static async listTopic(req,res,next){
        try{
            const dados = await Topic.find({})//.populate('topicsCode')
            res.status(200).send(dados)
        }catch(error){
            next(error)
        }
    }

    static async listTopicById(req,res,next){
        try{
            const id = req.params.id
            const findData = await Topic.findById(id)//.populate('topicsCode')
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
    static async putTopic(req,res,next){
        try{
            const id = req.params.id
            const body = await Topic.findByIdAndUpdate(id, req.body, {new: true})
            res.status(201).send(body)
        }catch(error){
            next(error)
        }
    }
    static async patchTopic(req,res,next){
         try{
            const id = req.params.id
            const body = await Topic.findByIdAndUpdate(id, req.body, {new: true})
            res.status(201).send(body)
        }catch(error){
            next(error)
        }
    }
}



export default TopicsController