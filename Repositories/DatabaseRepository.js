class DatabaseRepository{
    constructor(db){
        this.db = db;
    }

    async list(collectionName){
        return await this.db.getCollectionList(collectionName);
    }

    async add(document, collectionName){  //returns a reference to get the id
        return await this.db.addDocument(document,collectionName);
    }

    async addWithId(document, collectionName, id){
        this.db.addDocumentWithSpecificId(document,collectionName, id);
    }

    async updateDocument(data, collectionName, id){
        this.db.updateDocument(data,collectionName,id);
    }

    async getOne(id, collectionName){
        return await this.db.getOneDocument(id,collectionName);
    }

    async update(id, collectionName,key,data){
        return await this.db.update(id,collectionName,key,data);
    }
}

module.exports = DatabaseRepository;