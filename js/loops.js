let loop_quiz;
let print_quiz;
let curr;
let question = -1;

// getting the quiz from the json file
function getJSON()
{
    $.getJSON("../data/quizzes.json", 
    function(data)
    {
        loop_quiz = data["loop-quiz"];
        showQuiz();
    })
}

// displays quiz
function showQuiz()
{
    question++;
    if (question > 5) {
        question = 0;
    }
    print_quiz = document.getElementById("exercises");
    curr = loop_quiz[question];
    // for the quiz box and curr question/code
    let quiz_div = 
        `<div class="quiz-box">
        <h2>Exercises</h2>
        <h3>${curr.question}</h3>
        <pre class="quiz-code"><code>${curr.code}</code></pre>
        <div class="options">
        `;
    //for the answer options for each question
    for (let i = 0; i < curr.options.length; i++) {
        quiz_div += 
            `
            <div class="op">
            <input type="radio" name="quiz-ans" value="${i}" id="${i}">
            <label for="${i}">${curr.options[i]}</label>
            </div>
            `;
    }
    // for the button to check the answer
    quiz_div += 
        `
        </div>
        <button onclick="checkAns()">Check Answer</button>
        </div>
        `;
    print_quiz.innerHTML = quiz_div;
}

// checks the answer provided by the user
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
        print_quiz.innerHTML += 
            `<button onclick="showQuiz()">Next</button>`
    } else if (curr.correct != which && check) {
        alert("That's incorrect, try again!");
    }
}

getJSON();