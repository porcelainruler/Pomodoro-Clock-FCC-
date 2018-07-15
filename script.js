window.onload=function(){
    var clock=document.getElementById("clock");
    var display=document.getElementById("display");
    var start=document.getElementById("start");
    var pause=document.getElementById("pause");
    var refresh=document.getElementById("refresh");
    var breakup=document.getElementById("break-up");
    var breaklabel=document.getElementById("break-label");
    var breakdown=document.getElementById("break-down");
    var strengthup=document.getElementById("strength-up");
    var strengthlabel=document.getElementById("strength-label");
    var strengthdown=document.getElementById("strength-down");

    var flag=true;
    display.innerText="25:00";

    breaklabel.innerText="5";
    strengthlabel.innerText="25";

    breakup.onclick=function(){
        breaklabel.innerText=parseInt(breaklabel.innerText)+1;
    }

    breakdown.onclick=function(){
        breaklabel.innerText=parseInt(breaklabel.innerText)-1;
    }

    strengthup.onclick=function(){
        strengthlabel.innerText=parseInt(strengthlabel.innerText)+1;
        display.innerText=parseInt(strengthlabel.innerText) + ":00";
    }

    strengthdown.onclick=function(){
        strengthlabel.innerText=parseInt(strengthlabel.innerText)-1;
        display.innerText=parseInt(strengthlabel.innerText) + ":00";
    }

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
