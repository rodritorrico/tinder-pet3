const admin = require('../SDK/FirebaseAdmin');
const spawn = require('child-process-promise').spawn;
const path = require('path');
const os = require('os');
const fs = require('fs');

class FireStorage{
    constructor(bucketName, path){
        this.bucket = admin.storage().bucket(bucketName);
        this.path = path
    }


    async downloadFile(filePath){
        return await this.bucket.file(filePath).download();
    }

    // async uploadFile(tempFilePath){
    //     await this. bucket.upload(tempFilePath, {
    //         destination: this.path,
    //         metadata: metadata,
    //       });
    // }


}

module.exports = FireStorage;