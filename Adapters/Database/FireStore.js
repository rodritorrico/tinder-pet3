const admin = require('../SDK/FirebaseAdmin');
const of = require('rxjs').of

//TODO: refacto add url
class FireStore{
    constructor(){
        this.db = admin.firestore(); 
    }

    getCollection(collectionName){
        return this.db.collection(collectionName);
    }

    getCollectionInstance(collectionName){
        return this.getCollection(collectionName).get(); //this function needs an await when is called
    }

    async getCollectionList(collectionName){
        let documents = [];
        let collectionInstance = await this.getCollectionInstance(collectionName)
        
        collectionInstance.forEach(doc => {
            documents.push({id: doc.id, ... doc.data()});     
        });
    
        return documents;  
    }

    async addDocument(document,collectionName){
        let collection = await this.getCollection(collectionName);
        collection.add(document);
    }
}

module.exports = FireStore;