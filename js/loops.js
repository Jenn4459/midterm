let loop_quiz;
let print_quiz;
let curr;

function getJSON()
{
    $.getJSON("../data/quizzes.json", 
    function(data)
    {
        loop_quiz = data["loop-quiz"];
        showQuiz();
    })
}

function showQuiz()
{
    print_quiz = document.getElementById("exercises");
    curr = loop_quiz[0];
    let quiz_div = 
        `<div class="quiz-box">
        <h2>Exercises</h2>
        <h3>${curr.question}</h3>
        <pre>${curr.code}</pre>
        <div class="options">
        `;
    for (let i = 0; i < curr.options.length; i++) {
        quiz_div += 
            `
            <div class="op">
            <input type="radio" name="quiz-ans" value="${i}" id="${i}">
            <label for="${i}">${curr.options[i]}</label>
            </div>
            `;
    }
    quiz_div += 
        `
        </div>
        <button onclick="checkAns()">Check Answer</button>
        </div>
        `;
    print_quiz.innerHTML = quiz_div;
}

function checkAns()
{
    let check = document.querySelector('input[name="quiz-ans"]:checked');
    let which;
    if (!check) {
        alert("Please check an answer");
    } else if (document.getElementById('0').checked) {
        which = 0;
    } else if (document.getElementById('1').checked) {
        which = 1;
    } else if (document.getElementById('2').checked) {
        which = 2;
    } else if (document.getElementById('3').checked) {
        which = 3;
    }

    if (curr.correct === which) {
        alert(`${curr.feedback}`);
    } else if (curr.correct != which && check) {
        alert("That's incorrect, try again!");
    }
}

getJSON();