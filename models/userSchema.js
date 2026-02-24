import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true
  },
  password :{
    type: String,
    required: true
  },
  topicsProgress: [
     {
    roadmap: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "roadmaps",
      required: true
    },
    completedFields: {
       varAndConsts: {
          type: Boolean,
          default: false
        },
        dataTypes: {
          type: Boolean,
          default: false
        },
        operators: {
          type: Boolean,
          default: false
        },
        objArr: {
          type: Boolean,
          default: false
        },
        loopings: {
          type: Boolean,
          default: false
        },
        ctrlEstructures: {
          type: Boolean,
          default: false
        },
        functions: {
          type: Boolean,
          default: false
        }
  }  //isso foi feito para apontar para cada campo do model indempendentemennte, antes apontava para o model completo de topics
}
  ]
});

export const User = mongoose.model("User", userSchema);
