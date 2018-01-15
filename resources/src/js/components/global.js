!(function($) {

    $(document).ready(function() {

        // Enable global tooltips:
        $('[data-toggle="tooltip"]').tooltip();
        
        $('[data-match-group]').each(function(index, element) {
            console.log('[data-match-group="' + $(element).data('match-group') + '"]');
            $('[data-match-group="' + $(element).data('match-group') + '"]').matchHeight();
        }); 

    });

})(jQuery);