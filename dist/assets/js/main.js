$(document).ready(function(){

    setSlideSize();
    mobileMenuClose();

    $('.burger').click(function(){
        $(this).toggleClass('active');
        $('.nav').toggleClass('active');
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

    $('.action.more .btn').click(function(){
        $(this).closest('.section__content').find('.grid.more').slideDown();
        $(this).parent('.more').hide();
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

    $(window).resize(function() {
        setSlideSize();
        mobileMenuClose();
    });


    function setSlideSize() {
        //set top slides dynamically
        if ($(window).width() < 992) {
            $('#topslide .slides__top').css('width','100%');
            $('#topslide .slides__top').height( $(this).width() / 2 );
        }
    }

    function mobileMenuClose() {
        //close menu before menuSpy on mobile
        if ($(window).width() < 992) {
            $('.nav .menu__name').click(function(){
                $('.nav, .burger').removeClass('active');
            });
        }
    }
});