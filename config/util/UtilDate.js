module.exports = {

  primeiroDiaMes(){
    const date = new Date();
    return new Date(date.getFullYear(), date.getMonth(), 1);
  },

  ultimoDiaMes(){
    const date = new Date();
    return new Date(date.getFullYear(), date.getMonth() + 1, 0);
  },
};
