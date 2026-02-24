import jwt from "jsonwebtoken"

function verifyToken(req,res,next){
    const auth = req.headers.authorization

    if(!auth){
        return res.status(401).json({message : "Token not found"})
    }

    const token = auth.split(" ")[1]

    try{
        const decoded = jwt.verify(token, process.env.SECRET_TOKEN)
        req.user = decoded;
        next()
}catch(erro){
        return res.status(401).json({ message: "Token inválido" });
}
}

export default verifyToken