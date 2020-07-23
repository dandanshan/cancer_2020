$(document).ready(function () {

    mobileMenuClose();
    mousefollow();
    checkCookie();

    $('.burger').click(function () {
        $(this).toggleClass('active');
        $('.nav').toggleClass('active');
    });

    //menu scrolling
    $('.menu__name').click(function (e) {
        if (this.hash !== '') {

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                //add hash to URL when done scrolling
                window.location.hash = hash;
            });

            return false;
        }
    });


    //article load more
    $('.action.more').click(function () {

        var $this = $(this);
        var $el = $this.closest('.section__content').find('.grid.more li:hidden');

        $el.slice(0, 3).slideDown();

        if ($this.parent('.section__content').find('.grid.more li:hidden').length == 0) {
            $this.hide();
        }
    });

    $('.top__slides').slick({
        dots: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-prev slides__arrow slides__arrow--gray slides__arrow--prev" aria-label="Previous" type="button"></button>',
        nextArrow: '<button class="slick-next slides__arrow slides__arrow--gray slides__arrow--next" aria-label="Next" type="button"></button>',
        dotsClass: 'slides__dots slides__dots--violet',
    });

    $('.campaign__slides').slick({
        dots: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-prev slides__arrow slides__arrow--gray slides__arrow--prev" aria-label="Previous" type="button"></button>',
        nextArrow: '<button class="slick-next slides__arrow slides__arrow--gray slides__arrow--next" aria-label="Next" type="button"></button>',
        dotsClass: 'slides__dots slides__dots--violet',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    });

    //first slide
    $('.slides--video').on('init', function(event, slick, direction){
        var text = $('.slick-slide.slick-active .slides__media img').data('content');
        var link = $('.slick-slide.slick-active a').attr('href');
        $('.slides__content').find('.title').html(text);
        $('.slides__content a').attr('href', link);
    });

    $('.slides--video').on('afterChange', function(event, slick, currentSlide){
        var text = $('.slick-slide.slick-active .slides__media img').data('content');
        var link = $('.slick-slide.slick-active a').attr('href');
        $('.slides__content').find('.title').html(text);
        $('.slides__content a').attr('href', link);
    });

    $('.slides--video.slides--v').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        appendDots: $(this).find('.slides__title'),
        dotsClass: 'slides__dots slides__dots--violet slides__dots--video',
    });

    $('.slides--video.slides--p').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        appendDots: $(this).find('.slides__title'),
        dotsClass: 'slides__dots slides__dots--pink slides__dots--video',
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

    function checkCookie() {
        var headerH = $('header').outerHeight();
        var $alert = $('.alert');
        var alertH = $alert.outerHeight();
        var $topSlide = $('#topslide');

        var cookieString = getCookie('agree');

        if (cookieString !== 'yes') {
            // console.log('doesnt exist');
            $alert.show().css('top', headerH);
            $topSlide.css('padding-top', headerH);

            $('#setCookie').click(function () {
                setCookie('agree', 'yes', 30);

                $alert.css('right', '100%').fadeOut('fast');
                $topSlide.css('padding-top', '0');
            });
        } else {
            // console.log('exist');
        }
    }

    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = 'expires=' + d.toGMTString();
        document.cookie = cname + '=' + cvalue + ';' + expires;
        // console.log('set');
        // console.log(cname +'/'+ cvalue +'/'+ exdays);
    }

    function getCookie(cname) {
        var name = cname + '=';
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1);
            if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
        }
        return '';
    }

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

        if ($(window).width() > 768) {

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