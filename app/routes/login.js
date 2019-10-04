module.exports = function(app){
    // recebe req url
    app.get('/quero-ajuda', function(req, res){
        // envoca o metodo eventos na classe eventos
        app.app.controllers.queroAjuda.queroAjuda(app, req, res);
    });
};
