(function(win, doc){
  'use strict';

  // Acordeão Padrão;
  jQuery( '.acordeaoPadrao' ).each( function(){
    jQuery(this).find( '.acordeao' ).click( function(){
        if( jQuery(this).hasClass('ativo') ){
            jQuery(this).removeClass('ativo');
            jQuery(this).find('p').slideUp();
        } else {
            jQuery( '.acordeaoPadrao .acordeao' ).removeClass('ativo').find('p').slideUp();
            jQuery(this).addClass('ativo');
            jQuery(this).find('p').slideDown();
        }
    })
  });

 
  // var $visor = doc.querySelector('[data-js="visor"]');

})(window, document);
