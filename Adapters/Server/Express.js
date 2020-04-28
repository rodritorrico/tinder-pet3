const  express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const MainController = require('./../../Controllers/MainController');
const PetController = require('./../../Controllers/PetController');



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
        this.definePrincipalRoutes();
        this.definePetRoutes();
    }

    definePrincipalRoutes(){
        let mainController = new MainController(this.databaseRepository);

        this.app.get('/',(request, response) => {
            mainController.root(request,response);
        });  
    }

    definePetRoutes(){
        let petController = new PetController(this.databaseRepository);
        this.app.get('/pet',async (request, response) => {
            petController.listPets(request,response);
        });  
        this.app.post('/pet/add', async(request, response)=>{
            petController.addPet(request,response);
        })
    }
}
         
module.exports = Express;
