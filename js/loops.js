let loop_quiz;

function getJSON()
{
    $.getJSON("../data/quizzes.json", 
    function(data)
    {
        loop_quiz = data["loop-quiz"];
        console.log(loop_quiz);
        showQuiz();
    })
}

function showQuiz()
{
    const print_quiz = document.getElementById("exercises");
    let curr = loop_quiz[0];
    let quiz_div = 
        `<div class="quiz-box">
        <h2>Exercises</h2>
        <h3>${curr.question}</h3>
        <pre>${curr.code}</pre>
        div class="options">
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

getJSON();