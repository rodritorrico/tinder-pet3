
class UserController{
    constructor(dataBaseRepository){
        this.dataBaseRepository = dataBaseRepository
        this.collectionName = 'users'; 
    }

    async listUsers(request,response){
        try{
            let list = await this.dataBaseRepository.list(this.collectionName); 
            response.send({status: '200',message: 'This is the list of users', payload: list});
        }catch(exception){
            response.send({status: '500',message: exception});
        }
    }

    async addUser(request,response){
        try{
            let document = request.body;
            this.dataBaseRepository.addWithId(document,this.collectionName,document.uid); 
            response.send({status:'200', message: 'User added succesfully'});
        }catch(exception){
            response.send({status: '500',message: exception});
        }
    }

    async getOneUser(request,response){
        try{
            let id = request.params.id;
            let document = await this.dataBaseRepository.getOne(id,this.collectionName);
            response.send({status:'200',message:'Returned user with id',payload: document});
        }catch(exception){
            response.send({status: '500', message: exception})
        }
    }
}

module.exports = UserController;