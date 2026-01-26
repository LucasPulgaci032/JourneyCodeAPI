import ErroBase from "./erroBase.js";

class BadRequestError extends ErroBase {
     constructor(msg = "One or more datas are incorrect"){
        super(msg,400);
     }
}

export default BadRequestError;
