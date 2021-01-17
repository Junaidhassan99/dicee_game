function getRandNumber(imgclass) {
  var randNumber = Math.floor(Math.random() * 6 + 1);
  document.getElementsByClassName(imgclass)[0].src =
    "images/dice" + randNumber + ".png";
  return randNumber;
}

var playerScore1 = getRandNumber("img_payer_1");
var playerScore2 = getRandNumber("img_payer_2");

var titleText = document.getElementsByClassName("refresh_me_title")[0];
if (playerScore1 > playerScore2) {
  titleText.innerText = "Player 1 wins";
} else if (playerScore1 < playerScore2) {
  titleText.innerText = "Player 2 wins";
} else {
  titleText.innerText = "Draw";
}