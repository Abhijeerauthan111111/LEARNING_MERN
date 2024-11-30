
var weapon=undefined;
// var player_point=0;
// var computer_point=0;
var comp=undefined;
let score={
  player_point:0,
  computer_point:0,
  tie_point:0
};



function stone(){
document.querySelector(".try").style.display='block';
weapon=0;
comp=Math.floor(Math.random()*3);


if(comp===0){
    document.querySelector(".game-command").innerHTML="Computer Chose Stone 🪨";
    //document.getElementById('cw').innerHTML="Computer Choose Stone";
    document.getElementById('res').innerHTML="Its a Draw! Still Don't try again.";
    score.tie_point++;
    document.querySelector(".scoretie").innerHTML="Tie: "+ score.tie_point;
  }
  else if(comp===1){
    document.querySelector(".game-command").innerHTML="Computer Chose Paper 📜";
    // document.getElementById('cw').innerHTML="Computer Choose paper";
     document.getElementById('res').innerHTML="You Loose! Don't try again.";
     score.computer_point++;
     document.querySelector(".scorecomputer").innerHTML="Computer: "+ score.computer_point;
  }
  else{
    document.querySelector(".game-command").innerHTML="Computer Chose Scissor ✂";
     //document.getElementById('cw').innerHTML="Computer Choose Scissor";
     document.getElementById('res').innerHTML="You Won! Still Don't try again.";
     score.player_point++;
     document.querySelector(".scoreplayer").innerHTML="Player: "+ score.player_point;
  }


}


function paper(){
document.querySelector(".try").style.display='block';
weapon=1;
comp=Math.floor(Math.random()*3);
if(comp===0){
    document.querySelector(".game-command").innerHTML="Computer Chose Stone 🪨";
  //  document.getElementById('cw').innerHTML="Computer Choose Stone";
    document.getElementById('res').innerHTML="You Won! Still Don't try again.";
    score.player_point++;
    document.querySelector(".scoreplayer").innerHTML="Player: "+ score.player_point;
  }
  else if(comp===1){
    document.querySelector(".game-command").innerHTML="Computer chose Paper 📜";
 //    document.getElementById('cw').innerHTML="Computer Choose paper";
     document.getElementById('res').innerHTML="Its a draw! Still Don't try again.";
     score.tie_point++;
    document.querySelector(".scoretie").innerHTML="Tie: "+ score.tie_point;
  }
  else{
    document.querySelector(".game-command").innerHTML="Computer chose Scissor ✂";
   //  document.getElementById('cw').innerHTML="Computer Choose Scissor";
     document.getElementById('res').innerHTML="You Loose! Don't try again.";
     score.computer_point++;
     document.querySelector(".scorecomputer").innerHTML="Computer: "+ score.computer_point;
  }

 
}


function scissor(){
document.querySelector(".try").style.display='block';
weapon=2;
comp=Math.floor(Math.random()*3);
if(comp===0){
    document.querySelector(".game-command").innerHTML="Computer chose Stone 🪨";
  //  document.getElementById('cw').innerHTML="Computer Choose Stone";
    document.getElementById('res').innerHTML="You Loose! Don't try again.";
    score.computer_point++;
    document.querySelector(".scorecomputer").innerHTML="Computer: "+ score.computer_point;
  }
  else if(comp===1){
    document.querySelector(".game-command").innerHTML="Computer chose Paper 📜";
   //  document.getElementById('cw').innerHTML="Computer Choose paper";
     document.getElementById('res').innerHTML="You Won! Still Don't try again.";
     score.player_point++;
     document.querySelector(".scoreplayer").innerHTML="Player: "+ score.player_point;

  }
  else{
    document.querySelector(".game-command").innerHTML="Computer chose Scissor ✂";
     //document.getElementById('cw').innerHTML="Computer Choose Scissor";
     document.getElementById('res').innerHTML="Its a Draw! Still Don't try again.";
     score.tie_point++;
    document.querySelector(".scoretie").innerHTML="Tie: "+ score.tie_point;
  }   

}

function tryagain(){
  score.computer_point=0;
  score.player_point=0;
  score.tie_point=0;

 document.querySelector(".scoreplayer").innerHTML="Player: "+score.player_point;
 document.querySelector(".scoretie ").innerHTML="Player: "+score.tie_point;
 document.querySelector(".scorecomputer").innerHTML="Computer: "+score.computer_point;
document.getElementById('res').innerHTML="";
document.querySelector(".game-command").innerHTML="Choose Your Weapon Wisely.";
document.querySelector(".try").style.display='none';
}

