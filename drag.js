/**
 * Created by wei on 2016/9/5.
 */
window.onload=function drag(){
    var otitle=document.getElementById('logo');
    otitle.onmousedown=fndown;

}
/*鼠标按下函数实现*/
function fndown(event){
    event=event||window.event;
    var odrag=document.getElementById('login');
    disx=event.clientX-odrag.offsetLeft;/*光标按下时光标和面板之间的距离*/
    disy=event.clientY-odrag.offsetTop;
    
    /*移动*/
    document.onmousemove=function(event){
        event=event||window.event;
        fnmove(event,disx,disy)
        
    }
    /*松开*/
    document.onmouseup=function(){
        document.onmousemove=null;
        document.onmouseup=null;
    }
    
    
}
/*鼠标移动函数实现*/
function fnmove(e,posx,posy){
    var odrag=document.getElementById('login');
    var l=e.clientX-posx;
    var t=e.clientY-posy;
    odrag.style.left=l+'px';
    odrag.style.top=t+'px';
}

























