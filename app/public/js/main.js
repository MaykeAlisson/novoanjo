(function(win, doc){
  'use strict';

  var $acordeao = doc.querySelector('.acordeao');

  $acordeao.addEventListener('click', function(event){
    console.log('Fui clicado');
  }, false);

  // var $visor = doc.querySelector('[data-js="visor"]');

})(window, document);
