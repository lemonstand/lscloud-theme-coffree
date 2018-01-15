!(function($) {

    $(document).ready(function() {

        $('[data-toggle="search"]').click(function(e) {
            e.preventDefault();
            $('#header-search').toggleClass('header-search-open');
            $('#header-search [name="query"]').focus();
        });

        $('.header-sticky').sticky({ 
            topOffset: 0,
            zIndex: 1040,
            wrapperClassName: $('#header').is('.header-transparent') ? 'header-sticky-wrapper-transparent' : 'sticky-wrapper'
        });
        
    });

})(jQuery);