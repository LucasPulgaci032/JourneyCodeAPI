import ErroBase from "./erroBase.js";

class NotFoundError extends ErroBase {
   constructor(msg = "Item not found"){
    super(msg,404)
   }
}

export default NotFoundError