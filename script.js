window.onload=function(){
    var clock=document.getElementById("clock");
    var display=document.getElementById("time-left");
    var start_stop=document.getElementById("start_stop");
    var refresh=document.getElementById("refresh");
    var breakup=document.getElementById("break-up");
    var breaklabel=document.getElementById("break-label");
    var breakdown=document.getElementById("break-down");
    var sessionup=document.getElementById("session-up");
    var sessionlabel=document.getElementById("session-label");
    var sessiondown=document.getElementById("session-down");
    var beep=document.getElementById("beep");
    var timelabel=document.getElementById("time-label");
    var unlock=true;
    let intervalId="";

    var flag=true;
    var power=false;
    var mode=true;
    display.innerText="25:00";

    breaklabel.innerText="5";
    sessionlabel.innerText="25";

    breakup.onclick=function(){
        if(unlock && breaklabel.innerText<60)
            breaklabel.innerText=parseInt(breaklabel.innerText)+1;
    }

    breakdown.onclick=function(){
        if(breaklabel.innerText<0){

        }else if(unlock && breaklabel.innerText>0){
            breaklabel.innerText=parseInt(breaklabel.innerText)-1;
        }    
    }

    sessionup.onclick=function(){
        if(unlock && sessionlabel.innerText<60){
            sessionlabel.innerText=parseInt(sessionlabel.innerText)+1;
            if(sessionlabel.innerText<10){
                display.innerText="0"+parseInt(sessionlabel.innerText) + ":00";
            }else
            display.innerText=parseInt(sessionlabel.innerText) + ":00";
        }
    }

    sessiondown.onclick=function(){
        if(sessionlabel.innerText<0){

        }else if(unlock  && sessionlabel.innerText>0){
            sessionlabel.innerText=parseInt(sessionlabel.innerText)-1;
            if(sessionlabel.innerText<10){
                display.innerText="0"+parseInt(sessionlabel.innerText) + ":00";
            }else
            display.innerText=parseInt(sessionlabel.innerText) + ":00";
        }    
    }

    refresh.onclick=function(){
        if(flag){
            display.innerText="25:00";
            sessionlabel.innerText="25";
            breaklabel.innerText="5";
        }else{
            flag=true;
            clearInterval(intervalId);
            display.innerText="25:00";
            sessionlabel.innerText="25";
            breaklabel.innerText="5";
        }
    }

    start_stop.onclick=function(){
        if(!power){
            unlock=false;
            power=true;  
            var time="";

            if(flag){
                // display.innerText="25:00";
                var time=sessionlabel.innerText;
                if(sessionlabel.innerText<10){
                    time="0"+time;
                }
                time+=":00";
                flag=false;
            }else{
                time=display.innerText;
            }

            time=time.replace(":",".");
            var intime=parseFloat(time).toFixed(2);

            console.log(intime);

            var remtime=parseInt(intime)*60 + parseFloat(intime)*100 - parseInt(intime)*100;
            var num=0;
            var displaysc="";
            console.log(remtime);

            function handeler(){
                if(mode){
                    console.log(mode);
                    timelabel.innerText="Break";
                    beep.play();
                    var a1=breaklabel.innerText;
                    a1+=":00";
                    a1=a1.replace(":",".");
                    var a2=parseFloat(a1).toFixed(2);
                    var a3=parseInt(a2)*60 + parseFloat(a2)*100 - parseInt(a2)*100;
                    remtime=a3+1;
                    mode=false;
                }else{
                    console.log(mode);
                    timelabel.innerText="Session";
                    beep.play();
                    var a1=sessionlabel.innerText;
                    a1+=":00";
                    a1=a1.replace(":",".");
                    var a2=parseFloat(a1).toFixed(2);
                    var a3=parseInt(a2)*60 + parseFloat(a2)*100 - parseInt(a2)*100;
                    remtime=a3+1;
                    mode=true;
                }
            }

            intervalId = setInterval(function () {
                if(remtime===0){
                    handeler();
                }
                remtime--;
                console.log(remtime);
                num=parseInt(remtime/60);
                if(remtime%60===0){
                    if(num===0){
                        displaysc="00:00"
                    }else if(num<10){
                        displaysc="0"+num+":"+"00";
                    }else
                        displaysc=""+num+":"+"00";
                }else if(remtime%60<10 && remtime%60>0){
                    if(num===0){
                        displaysc="00:0"+(remtime%60);
                    }else if(num<10){
                        displaysc="0"+num+":0"+(remtime%60);
                    }else{
                        displaysc=num+":0"+(remtime%60);
                    }
                }else{
                    if(num===0){
                        displaysc="00:"+(remtime%60);
                    }else if(num<10){
                        displaysc="0"+num+":"+(remtime%60);
                    }else{
                        displaysc=""+num+":"+(remtime%60);
                    }
                }
                displaysc.replace(".",":");
                display.innerText= displaysc;
                }, 1000)
            }else{
                clearInterval(intervalId);
                power=false;
                unlock=true;
            }

    }

    







   
      
   


}
