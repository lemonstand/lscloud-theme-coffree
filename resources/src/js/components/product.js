!(function($) {

    $(document).ready(function() {

        $(document).on('click', '.product-quantity .btn', function(e) {
            
            e.preventDefault();

            var delta = $(this).data('delta');
            var input = $(this).closest('.product-quantity').find('.form-control');
            
            input.val(Math.max(1, parseInt(input.val()) + delta));
            
        });

    });

})(jQuery);