var readlineSync = require("readline-sync");
var score = 0;
var userName = readlineSync.question("what is your name? ");
console.log("Welcome " +userName);
console.log("Lets play a Quiz on cricket " + userName)

function play(question,answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer==answer){
    console.log("right");
    score = score + 1;
  }else{
    console.log("wrong")
  }
  console.log("Your Score is "+score);
  console.log("---------------------------")
}
play("Who had the Highest Run scorer in history? ","Sachin Tendulkar");
play("Who is the indian cricketer who hit six sixxes in six ball? ","Yuvraj Singh");
play("who is the world best captain who won all the ICC tropies? ","Ms Dhoni");
play("Who is the Current indian captain of india? ","Rohit Sharma");
play("Who hit Highest Sixes in T20 cricket? ","Chris Gayle");

