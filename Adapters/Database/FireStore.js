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

    async addDocumentWithSpecificId(document,collectionName,id){
        let collection  = await this.getCollection(collectionName);
        collection.doc(id).set(document);
    }

    async getDocumentById(id,collenctionName){
        let collection = await this.getCollection(collenctionName);
        return collection.doc(id);
    }

    async getOneDocument(id,collectionName){
        let docuemtionRef = await this.getDocumentById(id,collectionName);
        let document = await docuemtionRef.get();

        return document.data();
    }

    async updated(id,collectionName,key,data){
        let docuemtionRef = await this.getDocumentById(id,collectionName);
        docuemtionRef.update({key: data})
    }
}

module.exports = FireStore;