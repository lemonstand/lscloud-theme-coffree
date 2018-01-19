!(function($) {

    $(document).ready(function() {

        $('[data-toggle="offcanvas"]').click(function(e) {
            e.preventDefault();
            $('body').toggleClass('offcanvas-overlay-open');
        });

        $('.offcanvas-bar-scroll').mCustomScrollbar({
            'autoHideScrollbar': true,
            'position': 'inside',
            'theme': 'dark'   
        });

    });

})(jQuery);