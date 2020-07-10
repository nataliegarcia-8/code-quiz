// question variables 
var questions = [
    ["What does HTML stand for?", ["Hypertext Marketing Language", "Hypertrainer Marking Language", "Hypertext Markup Language", "Hyper Text Markup Leveler"], "Hypertext Markup Language"],
    ["What do you use to style an HTML page?", ["HTML", "JavaScript", "Java", "CSS"], "CSS"],
    ["What does CSS stand for?", ["Cascading Stem Sheets", "Cascading Style Sheets", "Cramming Styling Sheets", "Cramming Stem Sheets"], "Cascading Style Sheets"],
    ["Which choice is a scripting language used to create and control dynamic website content?", ["JavaScript", "CSS", "HTML", "Bootstrap"], "JavaScript"],
    ["Which choice is a popular CSS Framework for developing responsive websites?", ["JavaScript", "CSS", "HTML", "Bootstrap"], "Bootstrap"],
]
// variables 
var index = 0;

var startBtn = $("#startbtn")
var startScreen = $("#startScreen")
var gameScreen = $("#gameBox")
var questionDiv = $("#question")
var btnBox = $("#btns")
var scores = [];
var score = 0;

// start button - start page 

startBtn.click(function () {
    startScreen.hide();
    gameScreen.show();

    question(questions[index])
    
})
    var count = 50;
    var interval = setInterval(function(){
        document.getElementById('count').innerHTML = count;
        count--;
        if (count === 0){
            clearInterval(interval);
            alert("You're out of time!");
        }
    }, 1000);
    
// Display Question and Answer 
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

//check answer 
function checkAnswer() {
    var choice = $(this).text()
    var correctAnswer = questions[index][2]
    if( choice === correctAnswer) {
        score++;
    }
    
    index++;
    if (index < questions.length) {
        question(questions[index])
    } else {
        // window.location.href = window.location.href.replace("index", "highscore");
        localStorage.setItem("score", JSON.stringify(score));
        var redirect = $("#redirect")
        redirect[0].click()

    }
}

localStorage.setItem("correctAnswer", JSON.stringify(correctAnswer));

