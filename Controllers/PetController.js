const FireStore = require('../Adapters/Database/FireStore');

class PetController{
    constructor(dataBaseRepository){
        this.dataBaseRepository = dataBaseRepository
        this.collectionName = 'pets'; 
    }

    async listPets(request,response){
        let list = await this.dataBaseRepository.list(this.collectionName); 
        response.send({status: '200',message: 'This is the list of pets', payload: list});
    }

    addPet(request,response){
        let document = request.body 
        this.dataBaseRepository.add(document,this.collectionName); 
        response.send({status:'200', message: 'Pet added succesfully'});
    }
}

module.exports = PetController;