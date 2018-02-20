$('.js-details-container').each(function() {

    var $root = $(this);
    var $tabs_container = $root.find('.js-tabs');
    var $tabs = $tabs_container.find('.js-tabs-link');
    var $line = $root.find('.js-line');

    $(".js-details-content").not(":first").hide();

    $tabs.each(function(e) {
        var $tab = $(this);

        $tab.click(function (e) {
            e.preventDefault();
    
            $tabs.removeClass('is-active');
            $tab.addClass('is-active');

            $(".js-details-content").hide().eq($(this).index()).fadeIn();
    
            //Инициализация линии
            // ширина линии при клике на любой из табов
            $line.css({
                'width': $tab.width(),
                'left': $tab.position().left
            });
        });

        $tabs.filter('.is-active').trigger('click');
    });

    $(window).on('resize', function () {
        var $active_tab = $tabs.filter('.is-active');
        $line.css({
            'width': $active_tab.width(),
            'left': $active_tab.position().left
        });

    });

});
