import mongoose from "mongoose";

export function middleError(error, req,res,next){
  if(error instanceof mongoose.Error.CastError){
    res.status(400).send({message: "Um ou mais dados fornecidos estão incorretos"})
  }else if(error instanceof mongoose.Error.ValidationError){
    res.status(400).send({message: `${error.message}`})
    // usado quando por exemplo um campo obrigatorio (required) não é fornecido
  }
  else{
    res.status(500).send("Erro interno de servidor")
  }

}