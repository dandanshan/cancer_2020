$(document).ready(function () {

    mobileMenuClose();
    mousefollow();

    $('.burger').click(function () {
        $(this).toggleClass('active');
        $('.nav').toggleClass('active');
    });

    $('.action.more .btn').click(function () {
        $(this).closest('.section__content').find('.grid.more').slideDown();
        $(this).parent('.more').hide();
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

    //rellax
    var rellax = new Rellax('.rellax', {
        speed: -2,
        center: false,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
    });

    //menuSpy
    var elm = document.querySelector('.nav');
    var ms = new MenuSpy(elm);

    $(window).resize(function () {
        mobileMenuClose();
    });

    $(window).scroll(function () {
        //bottom fixed align bottom
        if ($('.bottom__fixed').length) {
            var scrollHeight = $(document).height();
            var scrollPosition = $(window).height() + $(window).scrollTop();

            var paddingBottom = $('.bottom__fixed').outerHeight();

            if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
                $('.container').css('padding-bottom', paddingBottom);
            }
        }
    });

    //close menu before menuSpy on mobile
    function mobileMenuClose() {
        if ($(window).width() < 1200) {
            $('.nav .menu__name').click(function () {
                $('.nav, .burger').removeClass('active');
            });
        }
    }

    //mouse follow
    function mousefollow() {

        if($(window).width() > 768) {

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

            $('body').mousemove(function (e) {
                mouseX = e.pageX;
                mouseY = e.pageY;
            });
        }
    }
});