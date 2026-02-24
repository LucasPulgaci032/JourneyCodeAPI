import {Roadmap} from "../models/roadmaps.js"

class RoadmapControllers {
  
  static async listData(req,res,next){
      try{
        const busca = await Roadmap.find({})
        res.status(200).send(busca)
      }catch(error){
        next(error)
      }
    }
    static async listDataId(req,res,next){
      try{
        const id = req.params.id;
        const busca = await Roadmap.findById(id)
        res.status(200).send(busca)
      }catch(error){
       next(error)
      }
    }

    static async postData(req,res,next){
      try{
        const body = await Roadmap.create(req.body)
        res.status(201).send({message:"objeto criado!",body})
      }catch(error){
        next(error)    
      }
    }

    static async putData(req,res,next){
        try{
          const {id} = req.params;
          const body = await Roadmap.findByIdAndUpdate(id,req.body,{new:true})
          res.status(200).send({message:"recurso atualizado",body})
        }catch(error){
          next(error)
        }
    }
    static async patchData(req,res,next){
      try{
        const {id} = req.params
        const body = await Roadmap.findByIdAndUpdate(id,req.body, {new: true}).populate('topics')
        if(!body) return res.send("Recurso não encontrado")
        res.status(200).send({message:"recurso atualizado",body})
      }catch(error){
          next(error)
        }
    }
    static async deleteData(req,res,next){
      try{
        const {id} = req.params
        const body = await Roadmap.findByIdAndDelete(id,req.body,{new:true})
        res.status(200).send({message:"Recurso excluído"},body)
      }catch(error){
        next(error)
      }
    }
    static findByKey = async (req,res,next) => {
      try{
          const {name} = req.query;
          if(name !== null){
               const rgx = {$regex : `^${name}$`, $options: "i" }
                const busca = await Roadmap.findOne({
                  name : rgx 
                })
                res.status(200).send(busca)
          }else{
            res.status(200).send([])
          }
         
      }catch(error){
        next(error)
      }  
    }
    }

  


export default RoadmapControllers;

//json.parse serve para transformar em json, utf-8 para ser lido como string, send para enviar o que foi lido 

