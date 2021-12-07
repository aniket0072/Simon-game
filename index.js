var userClickedPattern=[];
var gamePattern=[];
var buttonSequence =["red","blue","green","yellow"];
var level=-1;
  var userChoseColor;
  var currentlevel;
$(".btn").click(function(event){
  userChoseColor=this.id;
  handler(this.id);
  console.log(this.id);
  animatePress(this.id);
  check(userClickedPattern.length-1);

})
function check(vd){
if(gamePattern[vd]==userClickedPattern[vd])
{console.log("sucess");
if (userClickedPattern.length === gamePattern.length){
  setTimeout(function () {
    nextSequence();
  }, 900);}}
else{
console.log("over");
gameover();}
}
function gameover(){
  var audio=new Audio("sounds/wrong.mp3")
    audio.play();
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");
    },200)
   $("h1").html("Game Over, Press Any Key to Restart");
   startover();
}
function startover(){
  level=-1;
  var userClickedPattern=[];
  var gamePattern=[];
}
$(document).keydown(function(){
  if(level===-1)
  nextSequence();
console.log("key detected");
})
function handler(s){
//  console.log(s);
  userClickedPattern.push(s);
  recsound(s);
}
function animatePress(currentColor){
  $("#"+currentColor).addClass("pressed");
  setTimeout(function(){
      $("#"+currentColor).removeClass("pressed");
  },100)

}
function recsound(num){
  switch (num) {
    case "blue":
    var audio=new Audio("sounds/blue.mp3")
      audio.play();
      break;
      case "green":
      var audio=new Audio("sounds/green.mp3")
        audio.play();
        break;
    case "red":
        var audio=new Audio("sounds/red.mp3")
          audio.play();
          break;
      case "yellow":
          var audio=new Audio("sounds/yellow.mp3")
            audio.play();
            break;
    default:

  }
}
function nextSequence(){
  level++;
  currentlevel=0;
  userClickedPattern=[];
  $("h1").html("Level "+level);
  var randomNumber=Math.floor(Math.random()*4);
var randomChoseColor=buttonSequence[randomNumber];
gamePattern.push(randomChoseColor);
$("#"+randomChoseColor).fadeOut(120).fadeIn(120);
recsound(randomChoseColor);
}
