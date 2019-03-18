module.exports = function(app){
    // recebe req url
    app.get('/eventos', function(req, res){
        // envoca o metodo eventos na classe eventos
        app.app.controllers.eventos.eventos(app, req, res);
    });  
}