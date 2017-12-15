window.onload = function(){
    var sidebar = document.getElementsByClassName('sideNav')[0];
    var top = document.getElementsByClassName('li08')[0];
    window.onscroll = function(){
        var scrTop = document.documentElement.scrollTop || document.body.scrollTop;
        if(scrTop>500){
            sidebar.style.display = 'block';
        }else{
            sidebar.style.display = 'none';
        }
    }
    top.onclick = function() {    //回到顶部按钮点击事件
        //设置一个定时器
        var timer = setInterval(function () {
            //获取滚动条的滚动高度
            var osTop = document.documentElement.scrollTop || document.body.scrollTop;
            //用于设置速度差，产生缓动的效果
            var speed = Math.floor(-osTop / 6);
            document.documentElement.scrollTop = document.body.scrollTop = osTop + speed;
            if (osTop == 0) {
                clearInterval(timer);
            }
        }, 30);


    }

} 