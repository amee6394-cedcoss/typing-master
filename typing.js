const wordInput = document.querySelector(".test-wrapper");
const currentWord = document.querySelector("#test-area");
const fixedtext = document.querySelector("#origin-text p").innerHTML;
const  resetbtn= document.querySelector("#reset");
const timeDisplay= document.querySelector(".timer");
var time=[0,0,0,0];
var int;
var stop=false;
var error=0;
var wpm;
var ctime;
var text;
var text1;
var time1="";
var textlenght=0;
var words;


function start(){
var textlenght=currentWord.value.length;
if(textlenght===0 && !stop){
    stop=true;
    int=setInterval(run,10);
}
}
function spell(){
    var text=currentWord.value;
    console.log(text.split(" "));
    var words=text.split(" ").length;
    var wpm=parseInt((words/time1)*60);
    var text1=fixedtext.substring(0,text.length);
    if(text == fixedtext){
        clearInterval(int);
       wordInput.style.borderColor="green";
       document.getElementById("demo3").innerHTML="Words per minute="+wpm;
    }
    else{
        if(text == text1){
            wordInput.style.borderColor="#429898";
        }
        else{
            wordInput.style.borderColor="red";
            error++;
        }
    }
   
}
function run(){
    var acc=(((fixedtext.length-error)/fixedtext.length)*100);
    document.getElementById("demo1").innerHTML="accuracy="+acc+"%";
    if(acc<=0){
        document.getElementById("demo1").innerHTML="accuracy="+0+"%";
    }
    document.getElementById("demo2").innerHTML="Error="+error;
    time1=time[0]*60+time[1];
    var ctime=time[0]+":"+time[1]+":"+time[2];
    timeDisplay.innerHTML=ctime;
    time[3]++;
    time[0]=Math.floor((time[3]/100)/60);
    time[1]=Math.floor((time[3]/100)-(time[0]*60));
    time[2]=Math.floor(time[3]-(time[1]*100)-(time[0]*6000));
}

function reset(){
    stop=false;
    time=[0,0,0,0];
    wordInput.style.borderColor="yellow";
    clearInterval(int);
    int=null;
    currentWord.value="";
    timeDisplay.innerHTML="00:00:00";
    document.getElementById("demo1").innerHTML="Correct text typed Accuracy";
    document.getElementById("demo2").innerHTML="Errors";
    document.getElementById("demo2").innerHTML="Words per minute";
    count=0;
    error=0;

}
currentWord.addEventListener("keypress",start);
currentWord.addEventListener("keyup",spell);
resetbtn.addEventListener("click",reset);

