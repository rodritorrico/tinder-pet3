class UserUseCase {

    constructor(dataBaseRepository){
        this.dataBaseRepository = dataBaseRepository
        this.collectionName = 'users'; 
    }

    async addPetIdToUserList(uid,petId){  //uid = userId

        let user = await this.dataBaseRepository.getOne(uid,this.collectionName);
        let data = {pets:[]};
        if(user.pets != undefined){
            user.pets.forEach(pet => {
                data.pets.push(pet);
            });
        }
        data.pets.push(petId);
        this.dataBaseRepository.updateDocument(data,this.collectionName,uid)
    }

}

module.exports = UserUseCase;