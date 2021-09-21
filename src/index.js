window.addEventListener('DOMContentLoaded', function ()  {
    const tabs = require('./modules/tabs'),
          modal =require('./modules/modal'),
          calc =require('./modules/calc'),
          slider =require('./modules/slider'),
          forms =require('./modules/forms'),
          timer =require('./modules/timer'),
          cards =require('./modules/cards');
    
        tabs();
        modal();
        calc();
        slider();
        forms();
        timer();
        cards();
    });