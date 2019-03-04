// business logic
var firstPlayer;
var secondPlayer;

var rollDice=function() {
  return Math.floor(6*Math.random()) + 1
}

function User(turn) {
  this.roll = 0;
  this.roundTotal = 0;
  this.totalScore = 0;
  this.turn = nextplayer.Math.floor(2*Math.random()) + 1;
};


// checking for score 1
User.prototype.rollOne = function() {
  if (this.roll === 1) {
    this.roundTotal = 0;
    alert("next player's turn!" + " You rolled a 1!")
  } else {
    this.totalScore += this.roll;
  }
}
// Hold functionality
User.prototype.hold = function() {
  this.totalScore += this.roundTotal;
  this.roundTotal = 0;
  alert("Next players turn!!");
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
$("#newGame").click(function restart(){
firstPlayer = new User;
secondPlayer = new User;
$("dice-roll-1, #round-total-1, #total-score-1, #dice-roll-2, #round-total-2, #total-score-2").empty();
});

$("button #player1-roll").click(function () {
  firstPlayer.roll = rollDice();
  $("dice-roll-1").text(firstPlayer.roll);
  firstPlayer.rollOne();
  $("#round-total-1").text(firstPlayer.roundTotal);
});

$("button#player1-hold").click(function () {
  firstPlayer.hold();
  $("total-score-1").text(firstPlayer.totalScore);
  $("dice-roll-1, #round-total-1").empty();
})

$("button #player2-roll").click(function () {
  firstPlayer.roll = rollDice();
  $("dice-roll-2").text(firstPlayer.roll);
  firstPlayer.rollOne();
  $("#round-total-2").text(firstPlayer.roundTotal);
});

$("button#player2-hold").click(function () {
  firstPlayer.hold();
  $("total-score-2").text(firstPlayer.totalScore);
  $("dice-roll-1, #round-total-1").empty();
})

});
