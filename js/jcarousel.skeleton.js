(function($) {
    $(function() {


        /*
        Carousel initialization
        */
        $('.jcarousel')
        // .on('jcarousel:create jcarousel:reload', function() {
        //     var element = $(this),
        //     width = element.innerWidth();
        // element.jcarousel('items').css('width', width + 'px');
        // })
        .jcarousel({
            wrap: 'both',
            list: '.jcarousel-list',
            items: '.jcarousel-item'
                // Options go here
            });
			

        /*
         Prev control initialization
         */
        $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                // Options go here
                target: '-=1'
            });

        /*
         Next control initialization
         */
        $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                // Options go here
                target: '+=1'
            });

        /*
         Pagination initialization
         */
        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .jcarouselPagination({
                // Options go here
            });
    });
})(jQuery);
