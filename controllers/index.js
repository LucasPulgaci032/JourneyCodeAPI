import Roadmap from "../models/index.js"

class RoadmapControllers {
  
  static async listData(req,res){
      try{
        const dados = await Roadmap.find({})
        res.status(200).send(dados)
       
       
        
      }catch(error){
        res.send({message: error.message})
      }
       
  
    }

    static async listDataId(req,res){
      try{
        const id = req.params.id;
        const busca = await Roadmap.findById(id)
        res.status(200).send(busca)
      }catch(error){
        res.status(400).send({message: error.message})
      }
    }

    static async postData(req,res){
      try{
        const body = await Roadmap.create(req.body)
        res.status(201).send({message:"objeto criado!",body})
      }catch(error){
        res.status(400).send({message:error.message});
        
      }
    }


}



export default RoadmapControllers;

//json.parse serve para transformar em json, utf-8 para ser lido como string, send para enviar o que foi lido 