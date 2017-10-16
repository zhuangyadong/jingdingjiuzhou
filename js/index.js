$(function () {
    /*
     * banner图
     */

    var bannerNum = 0;
    var bannerUl = $('.banner01 ul li').eq(0).width() * $('.banner01 ul li').length;
    $('.banner01 ul').css('width', bannerUl + 'px')
    $('.bannerBtn li').each(function () {
        $(this).on('click', function () {
            bannerNum = $(this).index();
            $('.banner01 ul').animate({'left': -$('.banner01 ul li').eq(0).width() * bannerNum});
            addActive();
        })
    });
    var timer;
    timer = setInterval(function () {
        banner();
    }, 3000);
    $('.banner01').on('mouseover', function () {
        clearInterval(timer);
    });
    $('.bannerBtn ul').on('mouseover', function () {
        clearInterval(timer);
    });
    $('.banner01').on('mouseout', function () {
        timer = setInterval(function () {
            banner();
        }, 3000);
    });
    $('.bannerBtn ul').on('mouseout', function () {
        timer = setInterval(function () {
            banner();
        }, 3000);
    });
    function banner() {
        bannerNum++;
        addActive();
        $('.banner01 ul').animate({'left': -$('.banner01 ul li').eq(0).width() * bannerNum - 1});
        if (bannerNum >= $('.banner01 ul li').length - 1) {
            $('.banner01 ul').animate({'left': 0}, 0);
            bannerNum = 0;
            addActive();
        }
    };
    function addActive() {
        $('.bannerBtn li').each(function () {
            $(this).removeClass('active');
        });
        $('.bannerBtn li').eq(bannerNum).addClass('active');
    };
})