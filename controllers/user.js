import { User } from "../models/userSchema.js"
import { Topic } from "../models/topicSchema.js"
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"
import dotenv from "dotenv"


class UserController{

    static async findUser(req,res,next){
        try{
            const users = await User.find({})
            res.status(200).send(users)
        }catch{
            next(error)
        }
    }

    static async findUserById(req,res,next){
      try{
        const {id} = req.params
        const user = await User.findById(id)
        res.status(200).json(user)
      }catch(error){
        next(error)
      }
    }


    static async postUser(req, res, next) {
  try {
    let { name, email, password } = req.body;

    email = email.trim().toLowerCase()

      const existentUser = await User.findOne({email})
      if(existentUser){
        res.status(409).json({ message: "Email já cadastrado" });
        return
      }
    const hashed = await bcrypt.hash(password,10)
    const newUser = await User.create({
      name,
      email,
      password : hashed
    });
   
    return res.status(201).json(newUser);

  } catch (error) {
    next(error);
  }
}
 
static async validateUser(req,res,next){
  
  try{
  const {email,password} = req.body;
   if(!email || !password){
    res.status(400).json({message: "Por favor, preencha todos os campos!"})
    return
   }
  const user = await User.findOne({email})
   
  if(!user){
    return res.status(404).json({message: "Usuário não encontrado"})
  }
  const validatePassword = await bcrypt.compare(password, user.password)

  if(!validatePassword) {
    return res.status(401).json({message: "Email ou senha incorretos"})
  }

   res.status(200).json({message: "Login realizado"});
}catch(error){
  next(error)
}

}
static async patchTopicProgress(req,res,next){
  try{
    const {id} = req.params
    const {topicName, isCompleted} = req.body
     const topic = await Topic.findOne({ name: topicName })

    const change = await User.findOneAndUpdate({
      _id : id,
      "topicsProgress.topic": topic._id
    },
    {
      $set : {
        "topicsProgress.$.isCompleted": isCompleted
      }
    }, {new: true})

    res.status(200).json({message:"Atualizado", change})
  }catch(error){
    next(error)
  }
}


static async deleteById(req,res,next){
  try{
    const {id} = req.params.id
    const user = await User.findByIdAndDelete(id)
    return res.status(200).json(user)
  }catch(error){
    next(error)
  }
}
}
export default UserController

//O backend é a fonte única da verdade. O front apenas dispara intenções ou eventos.