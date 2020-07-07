// question variables 
var questions = [
    ["question?", ["answer1", "answer2"], "answer1"],
    ["question?", ["answer1", "answer2", "answer3"], "answer2"],
    ["question?", ["answer1", "answer2", "answer3", "answer4"], "answer3"],
    ["question?", ["answer1", "answer2", "answer3", "answer4"], "answer4"],
    // question("question?", ["answer1", "answer2", "answer3", "answer4"], "correctAnswer"),
    // question("question?", ["answer1", "answer2", "answer3", "answer4"], "correctAnswer"),
    // question("question?", ["answer1", "answer2", "answer3", "answer4"], "correctAnswer"),
    // question("question?", ["answer1", "answer2", "answer3", "answer4"], "correctAnswer"),
]
var index = 0;


var startBtn = $("#startbtn")
var startScreen = $("#startScreen")
var gameScreen = $("#gameBox")
var questionDiv = $("#question")
var btnBox = $("#btns")

startBtn.click(function () {
    startScreen.hide();
    gameScreen.show();

    question(questions[index])
})

// var q = (whatever passed to function, questions[index])
function question(q) {
    btnBox.empty()

    console.log(q)

    var text = q[0];
    var answers = q[1];

    questionDiv.text(text)

    for (var i = 0; i < answers.length; i++) {
        var btn = $("<button>")
        btn.text(answers[i])
        btn.click(checkAnswer)

        btnBox.append(btn)
    }
}

function checkAnswer() {
    var choice = $(this).text()
    var correctAnswer = questions[index][2]
    console.log(choice, correctAnswer)

    index++;
    if (index < questions.length) {
        question(questions[index])
    } else {
        // window.location.href = window.location.href.replace("index", "highscore");

        var redirect = $("#redirect")
        redirect[0].click()
        
        console.log("Game over")
    }
}