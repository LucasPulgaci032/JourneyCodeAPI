import mongoose from "mongoose";


const roadmaps = new mongoose.Schema({
    name: {
        type : String,
        required:true
    },
     
    description: {
        type : [String],
        required: true
        
      
    },
    topics: [{
        type : mongoose.Schema.Types.ObjectId,
        ref: "topics" ,
        required: true,
        autopopulate : true
    }]
       
    } 
)

export const Roadmap = mongoose.model("roadmaps",roadmaps);
//http://localhost:3000/roadmaps/language?name=JavaScript