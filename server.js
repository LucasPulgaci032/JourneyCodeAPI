
import dotenv from "dotenv";
import cors from 'cors'
import express from 'express';
import {$dbConnection} from './d=DbConnection/dBConnection.js'
import router from "./Routes/index.js";



dotenv.config();

const app = express()
app.use(cors())
app.use(express.json())
app.use(router)
const $PORT = 3000;



app.listen($PORT, () => {

    console.log(`servidor funfando na porta ${$PORT}`);
  
    
})

await $dbConnection();
export default app
//app.get("/", criarDado) No Express, você deve passar a função como callback da rota, e ela recebe req e res automaticamente.