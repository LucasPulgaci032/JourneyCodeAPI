
import dotenv from "dotenv";
dotenv.config();

import cors from 'cors'
import express from 'express';
import {$dbConnection} from './database/dBConnection.js'
import router from "./Routes/index.js";
import { middleError } from "./middlewares/MiddleError.js";




const app = express()
app.use(cors())
app.use(express.json())
await $dbConnection();
router(app)
app.use(middleError)
const $PORT = 3000;



app.listen($PORT, () => {

    console.log(`servidor funfando na porta ${$PORT}`);
  
    
})


export default app
//app.get("/", criarDado) No Express, você deve passar a função como callback da rota, e ela recebe req e res automaticamente.

//68f6a832a395a3f61c398ddc