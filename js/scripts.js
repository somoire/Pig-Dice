// business logic
var firstPlayer = {};
var secondPlayer = {};

var rollDice=function() {
  return Math.floor(6*Math.random()) + 1;
}

function User() {
  this.roll = 0;
  this.roundTotal = 0;
  this.totalScore = 0;
  //nextplayer.Math.floor(2*Math.random()) + 1;
};


// checking for score 1
User.prototype.rollOne = function() {
  if (this.roll === 1) {
    this.roundTotal = 0;
    alert("next player's turn!" + " You rolled a 1!")
  } else {
    this.roundTotal += this.roll;
  }
}
// Hold functionality
User.prototype.Hold = function() {
  this.totalScore += this.roundTotal;
  this.roundTotal = 0;
  alert("Next players turn!!");
  if(this.totalScore >= 100) {
    alert("you have won");
  }
}
// Winner checking functionality
User.prototype.winner = function() {
  if(this.totalScore >= 100) {
    alert("You won")
  }
  newGame();
}
// New Game prototype
User.prototype.newGame = function() {
  this.roll = 0;
  this.totalScore = 0;
  this.roundTotal = 0;
}

// front end
$("document").ready(function(){
$("#newGame").click(function(){
$("#dice-roll-1, #round-total-1, #total-score-1, #dice-roll-2, #round-total-2, #total-score-2").empty();
});
firstPlayer = new User();
secondPlayer = new User();
$("button#player1-roll").click(function () {
  firstPlayer.roll = rollDice();
  $("#dice-roll-1").text(firstPlayer.roll);
  firstPlayer.rollOne();
  $("#round-total-1").text(firstPlayer.roundTotal);
});

$("button#player1-hold").click(function () {
  firstPlayer.Hold();
  $("#total-score-1").text(firstPlayer.totalScore);
  $("#dice-roll-1").empty();
  $("#round-total-1").empty();
  $(".play1").hide();
  $(".play2").show();
})

$("button#player2-roll").click(function () {
  secondPlayer.roll = rollDice();
  $("#dice-roll-2").text(secondPlayer.roll);
  secondPlayer.rollOne();
  $("#round-total-2").text(secondPlayer.roundTotal);
});

$("button#player2-hold").click(function () {
  secondPlayer.Hold();
  $("#total-score-2").text(secondPlayer.totalScore);
  $("#dice-roll-2, #round-total-2").empty();
  $(".play2").hide();
  $(".play1").show();
})

$("button#newGame").click(function () {

})

});
