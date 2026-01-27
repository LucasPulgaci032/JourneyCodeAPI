import mongoose from "mongoose";

export const topic = new mongoose.Schema({
        varAndConsts: {
            type: [String],
            //required: true
    },
        dataTypes : {
             type: [String],
             //required: true
    },
       objArr : {
         type: String,
         //required: true
    },
      ctrlEstructures: {
        type: String,
        //required: true
    },
      functions : {
        type: String,
        //required: true
     },
      domMann : {
        type: String,
       // required: true
      }
      


})

export const Topic = mongoose.model("topics", topic)