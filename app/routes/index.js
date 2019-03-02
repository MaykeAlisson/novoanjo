module.exports = function(app){
    // Recebendo req url /  
    app.get('/', function(req, res){
        // Envoca metodo home na classe controllers index
        app.app.controllers.index.home(app, req, res);
    });
}