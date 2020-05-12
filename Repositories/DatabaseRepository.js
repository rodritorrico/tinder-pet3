class DatabaseRepository{
    constructor(db){
        this.db = db;
    }

    async list(collectionName){
        return await this.db.getCollectionList(collectionName);
    }

    async add(document, collectionName){
        this.db.addDocument(document,collectionName);
    }

    async addWithId(document, collectionName, id){
        this.db.addDocumentWithSpecificId(document,collectionName, id);
    }

    async getOne(id, collectionName){
        return await this.db.getOneDocument(id,collectionName);
    }

    async update(id, collectionName,key,data){
        return await this.db.update(id,collectionName,key,data);
    }
}

module.exports = DatabaseRepository;