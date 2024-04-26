let choice=document.querySelectorAll(".submit");
let player=document.querySelector("#plydis");
let computer=document.querySelector("#cmpdis");
let result=document.querySelector("#resdis");
let plyscrdisplay=document.querySelector("#plyscr");
let cmpscrdisplay=document.querySelector("#cmpscr");
let statusbar=document.querySelector(".status");
let ply;
let cmp;
let plyscr=0;
let cmpscr=0;
let sps=["stone","paper","scissor"];
let timeout;
let you=0;
let com=0;


choice.forEach(button=>button.addEventListener("click",()=>{
    ply=button.textContent;
    player.textContent=ply;
    computerturn()
    computer.textContent=cmp;
    result.textContent=checkWinner();
    
    if(checkWinner()=="Tie")
{
     plyscr,cmpscr;
}
else if(checkWinner()=="You Win")
{
    plyscr++;
}
else if (checkWinner()=="You Lose") {
    cmpscr++;
}
plyscrdisplay.textContent=`Your Score : ${plyscr}`;
cmpscrdisplay.textContent=`Computer Score : ${cmpscr}`;

if(ply=="stone"){
    player.style.color="red";
}
else if(ply=="paper"){
    player.style.color="lightgreen";
}
else if(ply=="scissor"){
    player.style.color="orange";
}


if(cmp=="stone"){
    computer.style.color="red";
}
else if(cmp=="paper"){
    computer.style.color="lightgreen";
}
else if(cmp=="scissor"){
    computer.style.color="orange";
}


if(checkWinner()=="Tie")
{
    result.style.color="pink"
}
else if(checkWinner()=="You Win")
{
    result.style.color="white"
}
else if(checkWinner()=="You Lose")
{
    result.style.color="gray"
}

if(plyscr>=10){
    statusbar.textContent="You Win the Match";
    statusbar.style.color="green";
    statusbar.style.visibility="visible";
    timeout=setTimeout(winstatus,2000);
    plyscr=0;
    cmpscr=0;
    you++;
    document.querySelector(".seriesyou").textContent=`You : ${you}`;
    document.querySelector(".seriescom").textContent=`Computer : ${com}`;
    plyscrdisplay.textContent=`Your Score : ${plyscr}`;
    cmpscrdisplay.textContent=`Computer Score : ${cmpscr}`;
}
else if(cmpscr>=10){
    statusbar.textContent="Computer Win the Match";
    statusbar.style.color="brown";
    statusbar.style.visibility="visible";
    timeout=setTimeout(winstatus,2000);
    plyscr=0;
    cmpscr=0;
    com++;
    document.querySelector(".seriesyou").textContent=`You : ${you}`;
    document.querySelector(".seriescom").textContent=`Computer : ${com}`;
    plyscrdisplay.textContent=`Your Score : ${plyscr}`;
    cmpscrdisplay.textContent=`Computer Score : ${cmpscr}`;
}

if(you>=3){
    document.querySelector(".part1").textContent="Congratulation!!!...You Win The Title.. ";
    document.querySelector(".part2").style.position="absolute";
    document.querySelector(".part1").style.transform="translateX(0px)";
    document.querySelector(".part2").style.transform="translateX(0px)";
} 
else if(com>=3){
    document.querySelector(".part1").textContent="Hard luck!!!...Computer Win the Title..";
    document.querySelector(".part2").style.position="absolute";
    document.querySelector(".part1").style.transform="translateX(0px)";
    document.querySelector(".part2").style.transform="translateX(0px)";

}
}));

function computerturn(){
        cmp=sps[Math.floor(Math.random()*sps.length)];
};

function checkWinner(){
    ply=ply.trim()
    if(cmp==ply){
        return "Tie"
    }
    else if(cmp==="stone"){
        return(ply==="paper")?"You Win":"You Lose"
    }
    else if(cmp=="paper"){
        return(ply=="scissor")?"You Win":"You Lose"
    }
    else if(cmp=="scissor"){
        return(ply=="stone")?"You Win":"You Lose"
    }
};

function  winstatus(){
    statusbar.textContent="";
    statusbar.style.visibility="hidden";
    plyscr=0;
    cmpscr=0;
    plyscrdisplay.textContent=`Your Score : ${plyscr}`;
    cmpscrdisplay.textContent=`Computer Score : ${cmpscr}`;
}