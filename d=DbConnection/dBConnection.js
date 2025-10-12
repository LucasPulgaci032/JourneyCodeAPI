import mongoose from "mongoose";


export async function $dbConnection(){
    try{
   const $connection =  await mongoose.connect(process.env.STR_CONNECTION_DB)
    console.log("conectado ao banco!");
    return $connection.connection;
    
}catch(error){
    console.log({message: "connection error"});
    
}

}
export default $dbConnection;
