import mongoose from "mongoose";
import ValidationError from "../errors/validationError.js";
import BadRequestError from "../errors/BadRequestError.js";
import NotFoundError from "../errors/notFoundError.js";
import ErroBase from "../errors/erroBase.js";

export function middleError(error, req,res,next){

  if(error instanceof mongoose.Error.CastError){
   new BadRequestError().errorResponse(res)
  }
  else if(error instanceof mongoose.Error.ValidationError){
    new ValidationError(error).errorResponse(res)
  }else if(error instanceof NotFoundError){
     error.errorResponse(res)
  }
  else{
    new ErroBase().errorResponse(res)
  }

}