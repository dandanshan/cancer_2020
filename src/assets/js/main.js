$(document).ready(function(){

    setSlideSize();
    mobileMenuClose();
    mousefollow();

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

    $(window).resize(function() {
        setSlideSize();
        mobileMenuClose();
    });

    //set top slides dynamically
    function setSlideSize() {
        if ($(window).width() < 992) {
            $('#topslide .slides__top').css('width','100%');
            $('#topslide .slides__top').height( $(this).width() / 2 );
        }
    }

    //close menu before menuSpy on mobile
    function mobileMenuClose() {
        if ($(window).width() < 992) {
            $('.nav .menu__name').click(function(){
                $('.nav, .burger').removeClass('active');
            });
        }
    }

    //mouse follow
    function mousefollow() {

        var $cursor = $('#cursor');
        var mouseX = 0;
        var mouseY = 0;
        var cursorX = 0;
        var cursorY = 0;
        var speed = 0.1;

        function animate() {
            var distX = mouseX - cursorX + 40;
            var distY = mouseY - cursorY + 40;

            cursorX = cursorX + (distX * speed);
            cursorY = cursorY + (distY * speed);

            cursor.style.left = cursorX + 'px';
            cursor.style.top = cursorY + 'px';

            requestAnimationFrame(animate);
        }
        animate();

        $('body').mousemove(function(e) {
            mouseX = e.pageX;
            mouseY = e.pageY;
        });
    }
});