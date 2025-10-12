import mongoose from "mongoose";

const roadmaps = mongoose.Schema({
    name: {
        type : String,
        required: true,
    },
     
    description: {
        type : String,
        required: true
    }
})

const Roadmap = mongoose.model("roadmaps",roadmaps);
export default Roadmap;