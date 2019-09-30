module.exports = function(app){
    // Recebendo req url
    app.get('/contato',function(req, res) {
        // Envoca o metodo contato na classe contato
        app.app.controllers.contato.contato(app, req, res);
    });
};
