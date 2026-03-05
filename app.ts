

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
export const PORT = 3000;






export default app
