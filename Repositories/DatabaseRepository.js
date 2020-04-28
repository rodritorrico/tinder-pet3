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
}

module.exports = DatabaseRepository;