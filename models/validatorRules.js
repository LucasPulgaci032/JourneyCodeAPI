import mongoose from "mongoose";
import Roadmap from "./index.js";

mongoose.Schema.Types.String.set("validate",{
    
        validator:(field)=> field !== '',
        message: ({path}) => `O campo ${path} está em branco`
    
}
)
export default Roadmap