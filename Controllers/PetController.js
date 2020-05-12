
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

    addPet(request,response){
        try{
            let document = request.body 
            this.dataBaseRepository.add(document,this.collectionName); 
            response.send({status:'200', message: 'Pet added succesfully'});
        }catch(exception){
            response.send({status: '500',message: exception});
        }
    }
}

module.exports = PetController;