const wordInput = document.querySelector(".test-wrapper");
const currentWord = document.querySelector("#test-area");
const fixedtext = document.querySelector("#origin-text p").innerHTML;
const  resetbtn= document.querySelector("#reset");
const timeDisplay= document.querySelector(".timer");
var time=[0,0,0,0];
console.log(wordInput);
var int;
var stop=false;



function start(){
var textlenght=currentWord.value.length;
if(textlenght===0 && !stop){
    stop=true;
    int=setInterval(run,10);
}
}
function spell(){
    var text=currentWord.value;
    var text1=fixedtext.substring(0,text.length);
    if(text == fixedtext){
        clearInterval(int);
       wordInput.style.borderColor="#429898";
       console.log("h");
    }
    else{
        if(text == text1){
            wordInput.style.borderColor="green";
            console.log("h3");
        }
        else{
            wordInput.style.borderColor="red";
            console.log("h2");
        }
    }
   
}
function run(){
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
}
currentWord.addEventListener("keypress",start);
currentWord.addEventListener("keyup",spell);
resetbtn.addEventListener("click",reset);

