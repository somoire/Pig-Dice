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

User.prototype.hold = function() {
  this.totalScore += this.roundTotal;
  this.roundTotal = 0;
  alert("Next players turn!!");
}

User.prototype.winner = function() {
  if(this.totalScore >= 100) {
    alert("You won")
  }
  newGame();
}

User.prototype.newGame = function() {
  this.roll = 0;
  this.totalScore = 0;
  this.roundTotal = 0;
}




$("button#player1-roll").click(function(event){
    Player1.roll = throwdice();
    $("#dice-roll-1").text(player1.roll);
    Player1.rollone();
    $("#round-total-1").text(player1.tempscore);
  });


$("button#player1-hold").click(function(event) {
  Player1.hold()
  $("#total-score-1").text(Player1.totalScore)

})
