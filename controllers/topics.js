import NotFoundError from "../errors/notFoundError.js";
import { Roadmap } from "../models/roadmaps.js";
import { Topic } from "../models/topicSchema.js";

class TopicsController {
    static async listTopic(req,res,next){
        try{
            const dados = await Topic.find({}).populate("roadmap","name")
         
            res.status(200).send(dados)
        }catch(error){
            next(error)
        }
    }

    static async listTopicById(req,res,next){
        try{
            const id = req.params.id
            const doc = await Topic.findById(id).populate("roadmap","name")
         
            res.status(200).send(doc)
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
        console.log("Rota atingida!");
        
         try {
            const id = req.params.id
            const update = req.body
            console.log("Body recebido:", req.body);
            console.log("objArr é array?", Array.isArray(req.body.objArr));
            const updatedTopic = await Topic.findByIdAndUpdate(id,
                {$set: update},
                {new: true , runValidators: true}
            )
            if(!updatedTopic){
                throw new NotFoundError("Topico não ")
            }
            return res.status(200).send(updatedTopic)
         }catch(error){
            next(error)
         }
        
    }
    static async findTopicByRoadmapName(req,res,next){
        try{
            const {name} = req.query;
          
            if(!name){
                return res.status(200).json([])
            }
                const rgx = {$regex : `^${name}$`, $options: "i" }
                const roadmap = await Roadmap.findOne({
                 name : rgx 
                  })
                if(!roadmap){
                    return res.status(404).json({message: "Roadmap not found"})
                }
                const topics = await Topic.find({ roadmap: roadmap._id }) //isso só funciona porque este controller não popula nada, só tem o ref do id
                //um controller pode usar qualquer model (controller de Topic usa Roadmap)
                res.status(200).json(topics)
                }
    catch(error){
    next(error)
    //sso é basicamente um tipo de relacionamento 1:N no MongoDB:

    //1 Roadmap

    //N Topics
  } 

}
    static async deleteOldTopics(req,res,next){
        try{
            await Topic.updateMany(
            {}, // todos os documentos
            { $unset: { __v: "", topicsCode: "" } } // remove apenas essas duas chaves
        );

        res.status(200).send({ message: "Campos '__v' e 'topicsCode' removidos de todos os tópicos!" });
    }catch(error){
            next(error)
        }
    }
}



export default TopicsController

