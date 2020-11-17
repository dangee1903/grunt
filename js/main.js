$('.humberger').on('click',function () {
    $(this).toggleClass('active');
    $('.menu__content').toggleClass('active');
})
$('.menu__content ul li').on('click',function () {
    $(this).next('ul').toggleClass('active');
})
