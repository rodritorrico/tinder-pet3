class ServerRepository{
    constructor(server){
        this.server = server;   
    }

    itializeServer(){
        this.server.initialize();
    }

}

module.exports = ServerRepository;