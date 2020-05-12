const MainController = require('../../Controllers/MainController.js');
const UserController = require('../../Controllers/UserController.js');
const PetController = require('../../Controllers/PetController.js');

class Router{
    constructor(app,databaseRepository){
        this.app = app;
        this.databaseRepository = databaseRepository;
    }

    defineRoutes(){
        this.definePrincipalRoutes();
        this.definePetRoutes();
        this.defineUserRoutes();
    }

    definePrincipalRoutes(){
        let mainController = new MainController(this.databaseRepository);

        this.app.get('/',(request, response) => {
            mainController.root(request,response);
        });  
    }

    definePetRoutes(){
        let petController = new PetController(this.databaseRepository);
        let principalRoute = '/pet';

        this.app.get(principalRoute,async (request, response) => {
            petController.listPets(request,response);
        });  

        this.app.get(principalRoute + '/:id', async(request, response)=>{
            petController.getOnePet(request,response);
        })

        this.app.post(principalRoute + '/add', async(request, response)=>{
            petController.addPet(request,response);
        })
    }

    defineUserRoutes(){
        let userController = new UserController(this.databaseRepository);
        let principaleRoute = '/user';

        this.app.get(principaleRoute, async(request, response)=>{
            userController.listUsers(request, response);
        })

        this.app.get(principaleRoute + '/:id', async(request,response)=>{
            userController.getOneUser(request,response);
        })

        this.app.post(principaleRoute + '/add', async(request, response)=>{
            userController.addUser(request,response);
        })
    }
}

module.exports = Router;