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
    let intervalId="";

    var flag=true;
    display.innerText="25:00";

    breaklabel.innerText="5";
    strengthlabel.innerText="25";

    breakup.onclick=function(){
        breaklabel.innerText=parseInt(breaklabel.innerText)+1;
    }

    breakdown.onclick=function(){
        if(breaklabel.innerText<0){

        }else{
            breaklabel.innerText=parseInt(breaklabel.innerText)-1;
        }    
    }

    strengthup.onclick=function(){
        strengthlabel.innerText=parseInt(strengthlabel.innerText)+1;
        display.innerText=parseInt(strengthlabel.innerText) + ":00";
    }

    strengthdown.onclick=function(){
        if(strengthlabel.innerText<0){

        }else{
            strengthlabel.innerText=parseInt(strengthlabel.innerText)-1;
            display.innerText=parseInt(strengthlabel.innerText) + ":00";
        }    
    }

    refresh.onclick=function(){
        if(flag){
            display.innerText="25:00";
            strengthlabel.innerText="25";
            breaklabel.innerText="5";
        }else{
            flag=true;
            clearInterval(intervalId);
            display.innerText="25:00";
            strengthlabel.innerText="25";
            breaklabel.innerText="5";
        }
    }

    start.onclick=function(){

        if(flag){
            display.innerText="25:00";
            flag=false;
        }


        var time=display.innerText;

        time=time.replace(":",".");
        var intime=parseFloat(time).toFixed(2);

        console.log(intime);

        var remtime=parseInt(intime)*60 + parseFloat(intime)*100 - parseInt(intime)*100;
        var num=0;
        var displaysc="";
        console.log(remtime);

        intervalId = setInterval(function () {
            remtime--;
            console.log(remtime);
            num=parseInt(remtime/60);
            if(remtime%60===0){
                displaysc=""+num+":"+"00";
            }else if(remtime%60<10 && remtime%60>0){
                displaysc=""+num+":0"+(remtime%60);
            }else{
                displaysc=""+num+":"+(remtime%60);
            }
            displaysc.replace(".",":");
            display.innerText= displaysc;
        }, 1000)


    }

    pause.onclick=function(){
        flag=true;
        clearInterval(intervalId);
    }







   
      
   


}
