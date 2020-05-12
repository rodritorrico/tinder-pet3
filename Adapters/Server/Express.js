const  express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const Router = require('./Router');


class Express{
    constructor(databaseRepository){
        this.app = express();
        this.databaseRepository = databaseRepository;
    }

    initialize(){
        this.configApp();
        this.defineRoutes();
    }

    configApp(){
        this.configCors();
        this.configBodyParser();
    }

    configCors(){
        this.app.use(cors());
    }

    configBodyParser(){
        this.app.use(bodyParser.text());
        this.app.use(bodyParser.json());
    }

    defineRoutes(){
        const router = new Router(this.app,this.databaseRepository);
        router.defineRoutes();
    }

}
         
module.exports = Express;
