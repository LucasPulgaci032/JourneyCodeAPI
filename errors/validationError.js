import ErroBase from "./erroBase.js";

class ValidationError extends ErroBase{
    constructor(erro){
        const errorMessage = Object.values(erro.errors)
        .map(erro => erro.message)
        .join('; ')

        super(`The next errors are found : ${errorMessage}`)
    }
}

export default ValidationError;

