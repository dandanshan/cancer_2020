$(document).ready(function () {

    mobileMenuClose();

    $('.burger').click(function () {
        $(this).toggleClass('active');
        $('.nav').toggleClass('active');
    });

    //detect city
    var city = $('#intro').attr('data-city');

    //build intro data
    $.each(data, function (index, value1) {
        if (index == city) {
            $.each(value1, function (index, value2) {
                $('.intro__slides').append('<li><div class="intro__info" data-id="' + value2.id + '">' +
                    '<div class="intro__avatar">' +
                    '<div class="avatar"><img src="../assets/images/forum/speaker/' + value2.img + '.png" alt=""></div></div>' +
                    '<div class="intro__name">' + value2.name + '</div>' +
                    '<div class="intro__title">' + value2.title + '</div>' +
                    '<button class="btn btn--inblock btn--forumOutline btn--sm"><span class="btn__text">詳細介紹</span></button>' +
                    '</div></li>');
            });
        }
    });

    //build agenda data
    $('.agenda').each(function () {

        dataId = $(this).attr('data-id');

        $.each(data, function (index, value1) {

            if (index == city) {
                $.each(value1, function (key, value2) {
                    if (dataId == value2.id) {

                        img = '../assets/images/forum/speaker/' + value2.img + '.png';

                        $('.agenda[data-id="' + dataId + '"]').append(
                            '<div class="agenda__info">' +
                            '<div class="agenda__time">' + value2.sessions + '<span>' + value2.topic + '</span></div>' +
                            '<div class="agenda__speaker">' +
                            '<div class="tag">主講人</div><div class="name">' + value2.name + '</div><div class="title">' + value2.title + '</div>' +
                            '<div class="agenda__avatar"><div class="avatar" data-id="' + dataId + '">' +
                            '<img src="' + img + '" alt=""></div>' +
                            '</div>' +
                            '<div class="action"><button class="btn btn--block btn--forumOutlineSec btn--sm"><span class="btn__text">詳細介紹</span></button></div>' +
                            '<div class="agenda__desc">' + value2.info + '</div></div>' +
                            '</div>');
                    }
                });
            }
        });
    });

    Swal.fire({
        title: '公告',
        html: '<p>為配合中央防疫政策，原訂於今年 6 月舉辦的《康健癌症論壇》決定取消 台北、台中、高雄 三場現場活動。造成不便，敬請見諒。</p>' +
        '<p>今年的康健癌症論壇，我們將改以<a href="https://www.commonhealth.com.tw/event/2020/cancer/lung.html"><b> 線上影音 </b></a>呈現，提供「精準抗癌x智慧醫療」的治療新知，持續陪伴癌友啟動癌後新生活。</p>' +
        '<div class="subtitle">邀請您一起追蹤</div><ul class="grid grid--info">' +
        '<li><a href="https://www.commonhealth.com.tw/event/2020/cancer/lung.html" target="_blank">' +
        '<div class="content"><h5><span class="caption">#全新策劃</span>線上影音：名醫談肺癌</h5>' +
        '<p>每週二、週四更新，癌症醫界權威聯手提供最新、值得信賴的抗癌解方，陪伴你啟動癌後新生活</p>' +
        '<div class="btn btn--main"><span class="btn__text">立即觀看</span></div></div></a></li>' +
        '<li><a href="https://www.commonhealth.com.tw/event/2020/cancer/" target="_blank">' +
        '<div class="content"><h5><span class="caption">#特別企劃</span>抗癌生活行動</h5>' +
        '<p>從生活飲食、醫療技術到癌後人生，抗癌生活計畫給你最需要的資訊與解方</p>' +
        '<div class="btn btn--main"><span class="btn__text">了解更多</span></div></div></a></li></ul>',
        showCloseButton: true,
        showConfirmButton: false,
        width: 800,
        customClass: {
            popup: 'popup--info',
        }
    })

    //intro popup
    $('.intro__slides').on('init', function (event, slick) {

        $('#intro .intro__slides li').click(function () {

            dataId = $(this).find('.intro__info').attr('data-id');
            getData();
        });
    });

    //speaker avatar popup
    $('.agenda .avatar').click(function () {

        dataId = $(this).attr('data-id');
        getData();
    });

    //speaker name and title popup
    $('.agenda .name, .agenda .title').click(function () {

        dataId = $(this).closest('.agenda').attr('data-id');
        getData();
    });

    //speaker name and title popup for tp afternoon session
    $('.agenda--tp .name, .agenda--tp .title').click(function () {

        dataId = $(this).parent('.agenda__speaker').attr('data-id');
        getData();
    });


    //qa accordion
    $('.accordion').click(function () {
        var $this = $(this);
        var isActive = $this.hasClass('active');
        if (isActive) {
            $this.find('.accordion__body').slideUp(400, function () {
                $this.removeClass('active');
            });
            return
        }
        $('.accordion.active').find('.accordion__body').slideUp(400, function () {
            $('.accordion').removeClass('active');
        });
        $this.find('.accordion__body').slideDown(400, function () {
            $this.addClass('active');
        });
    });

    $('#goTop').click(function(){
        $('html, body').animate({scrollTop: 0}, 1000);
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
    $('.agenda .action').click(function () {
        $(this).next('.agenda__desc').fadeIn();
        $(this).hide();
    });

    $(window).resize(function () {
        mobileMenuClose();
    });


    $(window).scroll(function () {
        //header background color
        $(window).scrollTop() > $('#kv').outerHeight() ? $('.header').css('background', '#ffffff') : $('.header').css('background', 'transparent');

        //bottom fixed align bottom
        if ($('.bottom__fixed').length) {
            var scrollHeight = $(document).height();
            var scrollPosition = $(window).height() + $(window).scrollTop();

            var paddingBottom = $('.bottom__fixed').outerHeight();

            if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
                $('.container').css('padding-bottom', paddingBottom);
            }
        }
        //go top show
        if ( $(this).scrollTop() > 800){
            $('#goTop, .gotop').addClass('active');
        } else {
            $('#goTop, .gotop').removeClass('active');
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

    //get data
    function getData() {
        $.each(data, function (index, value1) {
            if (index == city) {
                $.each(value1, function (key, value2) {
                    if (dataId == value2.id) {

                        name = value2.name;
                        title = value2.title;
                        intro = value2.intro;
                        time = value2.sessions;
                        img = '../assets/images/forum/speaker/' + value2.img + '.png';

                        popup();
                    }
                });
            }
        });
    }

    //popup template
    function popup() {
        Swal.fire({
            html: '<div class="avatar"><img src="' + img + '"></div><div class="intro__name">' + name + '</div><div class="intro__title">' + title + '</div><p>' + intro + '</p>',
            showCloseButton: true,
            showConfirmButton: false,
            customClass: {
                popup: 'popup--speaker',
            }
        })
    }
});