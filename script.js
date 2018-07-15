window.onload=function(){
    var clock=document.getElementById("clock");
    var display=document.getElementById("display");
    var start=document.getElementById("start");
    var pause=document.getElementById("pause");
    var refresh=document.getElementById("refresh");

    var flag=true;

    refresh.onclick=function(){
        display.innerText="25:00";
    }

    start.onclick=function(){

        if(flag){
            display.innerText="25:00";
            flag=false;
        }

    }

}
