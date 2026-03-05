import mongoose from "mongoose";




export const topic = new mongoose.Schema({
  roadmap : {
    type: mongoose.Schema.Types.ObjectId,
    ref: "roadmaps",
 
  },
  varAndConsts: {
    type: [String], 
   
  },
  dataTypes: {
    type: [String],
    
  
  },
  operators : {
    type : [String],
      
   
  },
  objArr: {
    type: [String], 
   
  },
  loopings : {
    type: [String],
    
  },
  ctrlEstructures: {
    type: [String],
   
    
  },
  
  functions: {
    type: [String],
  
  }

},
{versionKey: false})


export const Topic = mongoose.model("topics", topic)