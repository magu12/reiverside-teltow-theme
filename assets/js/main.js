jQuery(document).ready(function ($) {
    $(window).scroll(function () {
        if ($('.hero__item:eq(0)').offset().top - $(this).scrollTop() <= 0 && $('.hero__item:eq(0)').offset().top - $(this).scrollTop() >= -600) {
            $('.hero__item-bg, .hero__item').removeClass('active hide');
            $('.hero__item:eq(0)').addClass('active').find('img').addClass('active');
        }
        if ($('.hero__item:eq(1)').offset().top - $(this).scrollTop() <= 0 && $('.hero__item:eq(1)').offset().top - $(this).scrollTop() >= -600) {
            $('.hero__item-bg, .hero__item').removeClass('active hide');
            $('.hero__item:eq(0)').find('img').addClass('hide');
            $('.hero__item:eq(1)').addClass('active').find('img').addClass('active');
        }
        if ($('.hero__item:eq(2)').offset().top - $(this).scrollTop() <= 0 && $('.hero__item:eq(2)').offset().top - $(this).scrollTop() >= -600) {
            $('.hero__item-bg, .hero__item').removeClass('active hide');
            $('.hero__item:eq(0)').find('img').addClass('hide');
            $('.hero__item:eq(1)').find('img').addClass('hide');
            $('.hero__item:eq(2)').addClass('active').find('img').addClass('active');
        }
        $('.hero__item .logo').css('opacity', 1 - $(this).scrollTop() / 450);
        /*  $('.hero__item:eq(1) h2.title, .hero__advantages').css('opacity', 0 + $(this).scrollTop()/1300);
         
         $('.hero__item:eq(2) h2.title, .hero__text, .hero .btn').css('opacity', 0 + $(this).scrollTop()); */
    });
});