module.exports = {

  home(app, req, res){
    // console.log(req.query.id);
    res.status(200).render('index');
  }

};
