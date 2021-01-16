function getRandNumber(imgId) {
    var randNumber = Math.floor(Math.random() * 6 + 1);
    document.getElementById(imgId).src =
      "images/dice" + randNumber + ".png";
    return randNumber;
  }

  var playerScore1 = getRandNumber("img_payer_1_id");
  var playerScore2 = getRandNumber("img_payer_2_id");

  var titleText=document.getElementById("refresh_me_title_id");
  if(playerScore1>playerScore2){
    titleText.innerText="Player 1 wins";
  }else if(playerScore1<playerScore2){
    titleText.innerText="Player 2 wins";
  }else{
    titleText.innerText="Draw";
  }