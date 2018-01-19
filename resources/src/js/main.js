try {
    window.$ = window.jQuery = require('jquery');
    window.Popper = require('popper.js');
    
    require('bootstrap');
    require('bootstrap');
    require('owl.carousel');
    require('jquery-sticky');
    require('jquery-match-height');
    require('block-ui');
    require('malihu-custom-scrollbar-plugin');
        
    require('./components/carousels.js');
    require('./components/header.js');
    require('./components/global.js');
    require('./components/offcanvas.js');  
    require('./components/product.js');

} catch (e) {
    console.log(e);
}
