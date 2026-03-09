import { User } from "../models/userSchema.js"
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"
import { UserProg } from "../models/userProgress.js"
import { TokenPayload } from "../Types/SchemaTypes.js"


class UserController{

    static async findUser(req : Req, res : Res, next : Next){
        try{
            const users = await User.find({}).sort({createdAt: -1})
            res.status(200).send(users)
        }catch(error){
            next(error)
        }
    }

    static async findUserById(req : Req,res : Res ,next : Next){
      try{
        const {id} = req.params
        const user = await User.findById(id)
        res.status(200).json(user)
      }catch(error){
        next(error)
      }
    }


    static async postUser(req : Req, res : Res, next : Next) {
  try {
    let { name, email, password,roadmapId } = req.body;

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
      password : hashed,
      topicsProgress : roadmapId
        ? [
            {
              roadmap: roadmapId,
            }
          ]
        : []
    });
    const payload : TokenPayload = {
    id : newUser._id.toString(),
    name :newUser.name,
    theme :  newUser.theme
  }
 
   const token = jwt.sign(
    payload,
    process.env.SECRET_TOKEN as string,
    {expiresIn : "1d"}
  );
    await newUser.save();
  
    return res.status(201).json({user : newUser, token});

  } catch (error) {
    next(error);
  }
}
 
static async validateUser(req : Req,res : Res,next : Next){
  
  try{
  const {email,password} = req.body;

   if(!email || !password){
    return res.status(400).json({message: "Por favor, preencha todos os campos!"})
    
   }
  const user = await User.findOne({email})
   
  if(!user){
    return res.status(401).json({message: "Usuário não encontrado"})
  }
  const validatePassword = await bcrypt.compare(password, user.password)

  if(!validatePassword) {
    return res.status(401).json({message: "Email ou senha incorretos"})
  }
  const payload : TokenPayload = {
    id : user._id.toString(),
    name : user.name,
    theme :  user.theme
  }
 
   const token = jwt.sign(
    payload,
    process.env.SECRET_TOKEN as string,
    {expiresIn : "1d"}
  );
   return res.status(200).json({token});
}catch(error){
  next(error)
}

}

static async findUserTopicProgress(req : Req,res : Res, next : Next){
  try{
    const {id,roadmapId} = req.params
    const progress = await UserProg.findOne({
      user : id,
      roadmap : roadmapId
    }).lean()
    return res.status(200).json(progress)
    }catch(error){
      next(error)
    }
  }

  
static async patchTopicProgress(req : Req,res : Res,next : Next){
  try{
    const {id} = req.params
    const {roadmapId, topicName, isCompleted} = req.body
  
    const change = await User.findOneAndUpdate({
      _id : id,
      "topicsProgress.roadmap": roadmapId
    },
    {
      $set : {
            [`topicsProgress.$.completedFields.${topicName}`]: isCompleted
      }
    }, {new: true})

    res.status(200).json({message:"Atualizado", change})
  }catch(error){
    next(error)
  }
}


static async deleteById(req : Req,res : Res,next : Next){
  try{
    const id = req.params.id
    const user = await User.findByIdAndDelete(id)
    return res.status(200).json(user)
  }catch(error){
    next(error)
  }
}

static async deleteDB(req : Req,res : Res,next : Next){
  try{
   await User.deleteMany({})
  return res.status(200).json({message: "deleted"})
  }
  catch(error){
    next()
  }

}
static async setBackgroundTheme(req: Req, res: Res, next: Next){
  try{
    const id = req.user!.id
    const {theme} = req.body
    
    await User.findByIdAndUpdate(
      {_id :  id},
      {$set:{theme}},
      {upsert : true}
    )
   res.status(200).json({message : "Tema atualizado"})
  }catch(error){
    next(error)
  }
}
}
export default UserController

//O backend é a fonte única da verdade. O front apenas dispara intenções ou eventos.