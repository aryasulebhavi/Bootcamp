var yourname = document.getElementById("yourname"),
theirname= document.getElementById("theirname"),
calcBtn=document.querySelector("button"),
friendshipscoreis = document.getElementById("friendshipscoreis")
friendscore=Math.random()*100,
friendshipinfo=document.getElementById("friendshipinfo");
reload = document.getElementById("reload");
friendscore=Math.floor(friendscore) + 1;

//friend ship score calculator
function friend(){
  function sl(ms){
    return new Promise((resolve)=>setTimeout(resolve,ms));

  }
}
(async function(){
  var i=0;
  while (i<friendscore){
    document.getElementById("score").innerHTML=i+"%";
    await sl(20);
    i++;
  }
})();

calcBtn.addEventListener("click",function(3){
  friendscore=Math.random*100;
  e.preventDefault();
  
  if (yourname.value==" " && theirname.value == " "){
    alert("You cant leave the fields empty")
  }

  if (yourname.value==" "){
    alert("enter your name");
}
if(theirname.value == " "){
  alert("you dont have any friends");
});

