class ErroBase extends Error {
    constructor(msg = "Server error", status=500){
        super()
        this.message = msg;
        this.status = status
    }
    errorResponse(res){
        res.status(this.status).send({
            msg : this.message,
            status : this.status
        })
    }
}

export default ErroBase