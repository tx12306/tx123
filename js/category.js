window.addEventListener('load',function(){
    var jdCategory = new JdCategory();
    jdCategory.initLeftSlide();
    jdCategory. initRightSlide();
    jdCategory.leftCeiling();
}); 
  var JdCategory = function(){
  }
  JdCategory.prototype={
          initLeftSlide:function(){
              // 初始化左边滑动
       var swiper = new Swiper('.category-left,.swiper-container',{
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        mousewheel: true,
    });
      },
      leftCeiling:function(){
        // 左侧点击吸顶效果
        var ul = document.querySelector('.category-left ul');
        var lis =ul.children;
        for(var i=0; i<lis.length;i++){
            lis[i].index = i;
        }
        // 给ul添加点击事件
        ul.addEventListener('click',function(e){
            var li =e.target.parentNode;
            console.dir(li);
            console.log(li.index);
            // 获取当前点击li标签的索引
            var index = li.index;
            // 获取当前li标签的高度
            var liHeight = li.offsetHeight;
            // 计算当前位移的距离
            var distanceY = -index*liHeight;

            var maxDistanceY=document.querySelector('.category-left').offsetHeight - ul.offsetHeight;
            if( distanceY > maxDistanceY){
                ul.parentNode.parentNode.style.transform = 'translate3d(0px, ' + distanceY + 'px, 0px)';  
            }else{
                ul.parentNode.parentNode.style.transform = 'translate3d(0px, ' + maxDistanceY + 'px, 0px)';
            }
            // 10. 给当前的位移的元素添加一个过渡效果让他慢慢位移
            ul.parentNode.parentNode.style.transitionDuration = '300ms';
            // 11. 给所有的li删除active 给当前的li去添加active
            for (var i = 0; i < lis.length; i++) {
                lis[i].classList.remove('active');
            }
            li.classList.add('active');
        });
      },

      // 初始化右边滑动
      initRightSlide: function() {
        //初始化右边的滑动
        var swiper = new Swiper('.category-right .swiper-container', {
            direction: 'vertical',
            slidesPerView: 'auto',
            freeMode: true,
            scrollbar: {
                el: '.swiper-scrollbar',
            },
            mousewheel: true,
        });
  }
}
  