$(document).ready(function(){
    $('.burger').click(function(){
        $(this).toggleClass('active');
        $('.nav').toggleClass('active');
    });

    $(window).resize(function(){

        //set top slides dynamically
        if ($(this).width() < 768) {
            $('#topslide .slides__top').css('width','100%');
            $('#topslide .slides__top').height( $(this).width() / 2 );
        }
    });

    $('.top__slides').slick({
        dots: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-prev slides__arrow slides__arrow--gray slides__arrow--prev" aria-label="Previous" type="button"></button>',
        nextArrow: '<button class="slick-next slides__arrow slides__arrow--gray slides__arrow--next" aria-label="Next" type="button"></button>',
        dotsClass: 'slides__dots slides__dots--purple',
    });

    //menuSpy
    var elm = document.querySelector('.nav');
    var ms = new MenuSpy(elm);

    //mouse follow
    $('body').mousemove(function(e){
        $('#cursor').css({
            left: e.pageX + 10,
            top: e.pageY + 10,
        });
    });

});