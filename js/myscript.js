jQuery.noConflict();
(function( $ ) {
  $(function() {
    



		/* Nav Toggle */
		let nav = $("#header__nav"); 
		let navToggle = $(".burger");
		navToggle.on("click", function(event) {
			event.preventDefault();

			nav.toggleClass("menu_show");
		});



    /* Fixed Header */
    let header = $("#header");
    let intro = $("#intro");//нужен только когда скрол после конкретного блока
    let introH = 0;// сейчас при скролле на 0px (в 2 местах ставим + 17 строка) ,а после блока #intro так intro.innerHeight();
    let scrollPos = $(window).scrollTop();
	

    checkScroll(scrollPos, introH);

    $(window).on("scroll resize", function() {
        introH = 0;//intro.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH);
    });

    function checkScroll(scrollPos, introH) {
        if( scrollPos > introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }





    /*Hover element*/

$( ".peoples__item" ).hover(
  function() {
  	$(".hidden", this).show();
  }, function() {
    $(".hidden", this).hide();
  }
);
 







  });
})(jQuery);