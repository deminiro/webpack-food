window.addEventListener('DOMContentLoaded', function ()  {
    const tabs = require('./js/modules/tabs'),
          modal =require('./js/modules/modal'),
          calc =require('./js/modules/calc'),
          slider =require('./js/modules/slider'),
          forms =require('./js/modules/forms'),
          timer =require('./js/modules/timer'),
          cards =require('./js/modules/cards');
    
        tabs();
        modal();
        calc();
        slider();
        forms();
        timer();
        cards();
    });