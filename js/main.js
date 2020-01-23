/* Owl Carousel js start */
 $('.owl-carousel').owlCarousel({
         loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
            items:1
                },
             600:{
             items:3
                },
            1000:{
            items:5
                }
                 }
                })
/* Owl Carousel js end */
/* Counter JS */

$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});


/* Counter JS */