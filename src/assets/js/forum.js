$(document).ready(function() {

    $(window).scroll(function() {

        //header background color
        $(window).scrollTop() > $('#kv').outerHeight() ? $('.header').css('background','#ffffff') : $('.header').css('background','transparent');
    });

    $('.burger').click(function(){
        $(this).toggleClass('active');
        $('.nav').toggleClass('active');
    });

    $('.accordion').click(function(){
        var $this = $(this);
        var isActive = $this.hasClass('active');
        if (isActive) {
            $this.find('.accordion__body').slideUp(400, function() {
                $this.removeClass('active');
            });
            return
        }
        $('.accordion.active').find('.accordion__body').slideUp(400, function() {
            $('.accordion').removeClass('active');
        });
        $this.find('.accordion__body').slideDown(400, function() {
            $this.addClass('active');
        });
    });


    var rellax = new Rellax('.rellax', {
        speed: -2,
        center: false,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
    });

    $('.about__slides').slick({
        dots: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: '<button class="slick-prev slides__arrow slides__arrow--about slides__arrow--prev" aria-label="Previous" type="button"></button>',
        nextArrow: '<button class="slick-next slides__arrow slides__arrow--about slides__arrow--next" aria-label="Next" type="button"></button>',
        dotsClass: 'slides__dots slides__dots--about',
        responsive: [
            {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
            },
            {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
        ]
    });
    $('.intro__slides').slick({
        dots: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<button class="slick-prev slides__arrow slides__arrow--intro slides__arrow--prev" aria-label="Previous" type="button"></button>',
        nextArrow: '<button class="slick-next slides__arrow slides__arrow--intro slides__arrow--next" aria-label="Next" type="button"></button>',
        dotsClass: 'slides__dots slides__dots--intro',
        responsive: [
            {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
            },
            {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
        ]
    });
});