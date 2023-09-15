const ham = $('#js-hamburger');
const nav = $('#js-nav');
const head = $("header");

ham.on('click', function () { //ハンバーガーメニューをクリックしたら
   ham.toggleClass('active');
   nav.toggleClass('active');
   head.toggleClass('active');
});

$(".hamburger_a").click(function () {
    ham.removeClass("active");
    nav.removeClass("active");
    head.removeClass("active");
});