/**
 * Created by wei on 2016/9/5.
 */
window.onload=function drag(){
    /*实现移动面板*/
    var otitle=document.getElementById('logo');
    otitle.onmousedown=fndown;
    
    /*点击关闭按钮实现关闭面板*/
    var oclose=document.getElementById('close');
    oclose.onclick=function(){
        document.getElementById('login').style.display='none';
    }
    

























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
    var winW=document.documentElement.clientWidth||document.body.clientWidth;
    var winH=document.documentElement.clientHeight||document.body.clientHeight;
    maxW=winW-odrag.offsetWidth-10;/*-10是关闭按钮的宽度*/
    maxH=winH-odrag.offsetHeight;
    if(l<0){
        l=0
    }
    else if(l>maxW){
        l=maxW
    }
    if(t>maxH){
        t=maxH
    }
    else if(t<10){
        t=10
    }
    odrag.style.left=l+'px';
    odrag.style.top=t+'px';
}

























