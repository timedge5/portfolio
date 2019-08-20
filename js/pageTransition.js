;(function($) {
    'use strict';
    var $body = $('html, body'),
        content = $('#landing').smoothState({
            onStart: {
                duration: 250,
                render: function() {
                    content.toggleAnimationClass('is-exiting');

                    $body.animate({'scrollTop': 0});
                }
            }
        }).data('smoothState');
})(jQuery);
