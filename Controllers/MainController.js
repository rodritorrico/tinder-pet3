class MainController{
    constructor(dataBaseRepository){
        this.dataBaseRepository = dataBaseRepository;
    }

    root(request,response){
        response.send({status: '200', message: 'the api works'});
    }
}

module.exports = MainController;