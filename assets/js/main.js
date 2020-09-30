; (function ($) {
    $(document).ready(function () {
        // projects filters isotop
        $(".project-filters li").on('click', function () {

            $(".project-filters li").removeClass("active");
            $(this).addClass("active");

            var selector = $(this).attr('data-filter');

            $(".project-lists").isotope({
                filter: selector,
            });

        });

        // isotop inner
        $(".project-lists").isotope();
    });
}(jQuery));