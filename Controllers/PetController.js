
const UserUseCase = require('./../UseCases/UserUseCase');

class PetController{
    constructor(dataBaseRepository){
        this.dataBaseRepository = dataBaseRepository
        this.collectionName = 'pets'; 
    }

    async listPets(request,response){
        try{
            let list = await this.dataBaseRepository.list(this.collectionName); 
            response.send({status: '200',message: 'This is the list of pets', payload: list});
        }catch(exception){
            response.send({status: '500',message: exception});
        }
    }

    async getOnePet(request,response){
        try{
            let id = request.params.id;
            let document = await this.dataBaseRepository.getOne(id,this.collectionName);
            response.send({status: '200', message: 'this is the pet with the id', payload: document});
        }catch(exception){
            response.send({status: "500", message: exception})
        }
    }

    async addPet(request,response){
        try{
            let userUseCase = new UserUseCase(this.dataBaseRepository);
            let document = request.body;
            let reference = await this.dataBaseRepository.add(document,this.collectionName); 
            userUseCase.addPetIdToUserList(document.uid,reference.id);
            response.send({status:'200', message: 'Pet added succesfully'});
        }catch(exception){
            response.send({status: '500',message: exception});
        }
    }
}

module.exports = PetController;