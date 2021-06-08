

// banner区域轮播图
var app = new Vue({
    el: "#mask",
    data: {
        imgList: [
            "./upload/focus.jpg",
            "./upload/focus1.jpg",
            "./upload/focus2.jpg",
            "./upload/focus3.jpg",
        ],
        index: 0,
        isCurrent: [true],
    },
    methods: {

        prev: function () {
            if (this.index > 0) {
                this.index--;
            } else {
                this.index = this.imgList.length - 1;
            }
            // console.log(this.index);
            this.isCurrent = [];
            this.isCurrent[this.index] = true;
        },
        next: function () {
            // console.log(this.imgList.length);
            if (this.index < this.imgList.length - 1) {
                this.index++;
            } else {
                this.index = 0;
            }
            // console.log(this.index);
            this.isCurrent = [];
            this.isCurrent[this.index] = true;
        },
        changeImg: function (index) {
            // console.log("nihao");
            // console.log(index);
            this.index = index;
            this.isCurrent = [];
            this.isCurrent[index] = true;
        },
    }
})

// 返回顶部
$(function () {
    $.fn.back = function () {
        var boxTop = $(".box").offset().top;
        if ($(document).scrollTop() >= boxTop - 79) {
            $(".back").fadeIn();
        } else {
            $(".back").fadeOut();
        }
    }
    $(window).back();
    $(window).scroll(function () {
        $(window).back();
    });
    $(".back").click(function () {
        // $(document).scrollTop(0);
        $("body,html").animate({
            scrollTop: 0
        });
    })
})


// 图片滚动
window.addEventListener('load', function () {
    var id = function (el) { return document.getElementById(el); },
        c = id('photo-list');
    if (c) {
        var ul = id('scroll'),
            lis = ul.getElementsByTagName('li'),
            itemCount = lis.length,
            width = lis[0].offsetWidth, //获得每个img容器的宽度
            marquee = function () {
                c.scrollLeft += 2;
                if (c.scrollLeft % width <= 1) { //当 c.scrollLeft 和 width 相等时，把第一个img追加到最后面
                    ul.appendChild(ul.getElementsByTagName('li')[0]);
                    c.scrollLeft = 0;
                };
            };
        speed = 10; //数值越大越慢
        ul.style.width = width * itemCount + 'px'; //加载完后设置容器长度
        var timer = setInterval(marquee, speed);
        c.onmouseover = function () {
            clearInterval(timer);
        };
        c.onmouseout = function () {
            timer = setInterval(marquee, speed);
        };
    };

})