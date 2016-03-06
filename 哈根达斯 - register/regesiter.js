/**
 * Created by CC on 2015/12/20.
 */
function scroll() {
    if(window.pageYOffset != null)  //  ie9+ 和其他浏览器
    {
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    }
    else if(document.compatMode == "CSS1Compat")  // 声明的了 DTD
    // 检测是不是怪异模式的浏览器 -- 就是没有 声明<!DOCTYPE html>
    {
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }
    return { //  剩下的肯定是怪异模式的
        left: document.body.scrollLeft,
        top: document.body.scrollTop
    }
}
$(function(){
    $(".slider").on("mousedown","s",function(event){
        var event = event||window.event;
        var pagex = event.pageX||event.clientX + scroll().left;
        var x = pagex - $(".slider s ")[0].offsetLeft;
        document.onmousemove =function(event){
            var event = event||window.event;
            var pagex = event.pageX||event.clientX + scroll().left;
            var xx = pagex - x;
            if(xx<0){
                xx=0;
            }
            else{
                if(xx>$(".slider")[0].offsetWidth - $(".slider s")[0].offsetWidth){
                    xx=$(".slider")[0].offsetWidth - $(".slider s")[0].offsetWidth
                }
            }

            $(".slider s")[0].style.left = xx+"px";
            $(".slidermask")[0].style.width = xx +"px";
            alert ($(".slider")[0].offsetLeft);
        }
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        document.onmouseup = function() {
            document.onmousemove = null;
        }

    });
});
