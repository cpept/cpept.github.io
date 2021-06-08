$(function () {
    // nav状态栏下拉
    $(".nav>li").hover(function () {
        $(this).children("ul").stop().slideDown();
    }, function () {
        $(this).children("ul").hide();
    })

    // 顶部状态切换
    $.fn.dingbu = function () {
        if ($(document).scrollTop() > 0) {
            $("header").addClass("h-moving");
        } else {
            $("header").removeClass("h-moving");

        }
    };
    $(window).dingbu();
    $(window).scroll(function () {
        $(window).dingbu();
    });
})
