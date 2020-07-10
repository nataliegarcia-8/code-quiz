var scores = $("#scores");
var userScore = $("#user-score");
var highDiv = $("#highscores");
var clear = $("#clear");

clear.click(function () {
    localStorage.clear();
    location.reload();

})

function displayScore() {
    score = JSON.parse(localStorage.getItem("score"));
    var scoreDiv = $("<h1>");
    scoreDiv.text(score + " of 5");
    scores.append(scoreDiv);
    var highscores = JSON.parse(localStorage.getItem("highscores"));
    console.log(highscores)
    if(highscores) {
        highscores.push(score);
    
        for (var i = 0; i < highscores.length; i++) {
            var highscoreDiv = $("<div>");
            highscoreDiv.text(highscores[i]);
            highDiv.append(highscoreDiv);
        }
        
    }
if (highscores === null) {
    localStorage.setItem("highscores", JSON.stringify([]));

}
else {
    localStorage.setItem("highscores", JSON.stringify(highscores));
}
}




displayScore();