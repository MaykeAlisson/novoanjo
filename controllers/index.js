module.exports = {
  // GET /
  index(app, req, res){
    res.status(200).json({'page': 'index', 'author': 'community'});
  }

};
