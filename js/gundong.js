
var id = function (el) { return document.getElementById(el); },
    c = id('photo-list');
if (c) {
    var uul = id('scroll'),
        liss = uul.getElementsByTagName('li'),
        itemCount = liss.length,
        width = liss[0].offsetWidth, //获得每个img容器的宽度
        marquee = function () {
            c.scrollLeft += 2;
            if (c.scrollLeft % width <= 1) { //当 c.scrollLeft 和 width 相等时，把第一个img追加到最后面
                uul.appendChild(uul.getElementsByTagName('li')[0]);
                c.scrollLeft = 0;
            };
        };
    speed = 10; //数值越大越慢
    uul.style.width = width * itemCount + 'px'; //加载完后设置容器长度
    var timerr = setInterval(marquee, speed);
    c.onmouseover = function () {
        clearInterval(timerr);
    };
    c.onmouseout = function () {
        timerr = setInterval(marquee, speed);
    };
};
