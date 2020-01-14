$(document).ready(function() {

    $(window).scroll(function() {

        //header background color
        $(window).scrollTop() > $('#kv').outerHeight() ? $('.header').css('background','#ffffff') : $('.header').css('background','transparent');
    });

    $('.burger').click(function(){
        $(this).toggleClass('active');
        $('.nav').toggleClass('active');
    });

    var city = $('#intro').attr('data-city');

    console.log(city)

    $.each(data, function(index, value1) {
        if (index == city) {
            $.each(value1, function(index, value2) {
                $('.intro__slides').append('<li><div class="intro__info" data-id="' + value2.id + '">' +
                    '<div class="intro__avatar">' +
                    '<div class="avatar"><img src="https://www.commonhealth.com.tw/event/2019/cancer/assets/images/speaker/' + value2.id + '.jpg" alt=""></div></div>' +
                    '<div class="intro__name">' + value2.name + '</div>' +
                    '<div class="intro__title">' + value2.title + '</div>' +
                    '<button class="btn btn--inblock btn--forumOutline btn--sm"><span class="btn__text">詳細介紹</span></button>' +
                    '</div></li>')
            });
        } 
    });

    var dataId = '';

    $('.agenda').click(function(){
        dataId = $(this).attr('data-id');

        $.each(data, function(key1, value1) {
            if (key1 == city) {
                $.each(value1, function(key2, value2) {

                    if (dataId == value2.id ) {
                        console.log(value2.name)
                        console.log(value2.title)
                        console.log(value2.topic)

                        gName = value2.name;
                    }
                });
            }
        });
    });

    //qa accordion
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

    //rellax
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
        prevArrow: '<button class="slick-prev slides__arrow slides__arrow--gray slides__arrow--prev" aria-label="Previous" type="button"></button>',
        nextArrow: '<button class="slick-next slides__arrow slides__arrow--gray slides__arrow--next" aria-label="Next" type="button"></button>',
        dotsClass: 'slides__dots slides__dots--gray',
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

    $('.intro__slides').on('init', function(event, slick){
        console.log("initialized")

       

        $('#intro .intro__slides li').click(function(){

            var gName = '';
            var gTitle = '';

            console.log('click')
    
            var dataId = $(this).find('.intro__info').attr('data-id');

            console.log(dataId)
            
            $.each(data, function(key1, value1) {
                console.log(city)
                if (key1 == city) {
                    $.each(value1, function(key2, value2) {
    
                        if (dataId == value2.id ) {
                            console.log(value2.name)
                            console.log(value2.title)
                            console.log(value2.topic)
    
                            gName = value2.name;
                            gTitle = value2.title
                        }
                    });
                }
            });
    
            Swal.fire({
                html: '<div class="avatar"><img src=""></div><div class="intro__name">' + gName + '</div><div class="intro__title">' + gTitle + '</div><p>' + '</p>',
                showCloseButton: true,
                showConfirmButton: false,
                customClass: {
                    popup: 'popup--speaker',
                }
            })
        });
    });

    $('.intro__slides').slick({
        dots: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<button class="slick-prev slides__arrow slides__arrow--white slides__arrow--prev" aria-label="Previous" type="button"></button>',
        nextArrow: '<button class="slick-next slides__arrow slides__arrow--white slides__arrow--next" aria-label="Next" type="button"></button>',
        dotsClass: 'slides__dots slides__dots--blue',
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

    

    //menuSpy
    var elm = document.querySelector('.nav');
    var ms = new MenuSpy(elm);

    //agenda desc show in mobile
    $('.agenda .action').click(function(){
        $(this).next('.agenda__desc').fadeIn();
        $(this).hide();
    });
});