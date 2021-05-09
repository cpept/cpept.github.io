// nav状态栏下拉
window.addEventListener('load', function () {
    // 1. 获取元素
    var nav = document.querySelector('.nav');
    var lis = nav.children; // 得到4个小li
    // 2.循环注册事件
    for (var i = 0; i < lis.length; i++) {
        lis[i].onmouseover = function () {
            this.children[1].style.display = 'block';
        }
        lis[i].onmouseout = function () {
            this.children[1].style.display = 'none';
        }
    }


})
