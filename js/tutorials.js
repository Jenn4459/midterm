const NUM_SQUARES = 5;
let tutorial;
const links = [
    "tutorial3.html",
    "conditional.html",
    "loops.html",
    "functions.html",
    "classes.html"
]

for (let i=0; i<NUM_SQUARES; i++)
{
    document.write( `<div class='cell' id='${i}'></div>` );
}

function getJSON()
{
    $.getJSON("../data/tutorials.json", 
    function(data)
    {
        tutorial = data["tutorials"];
        showTutorials();

    })
}

function showTutorials()
{
    for (let i = 0; i < NUM_SQUARES; i++) {
        let print_tut = document.getElementById(`${i}`);
        let print = `
            <div id="tutorial${i}">
            <img class="image" src="${tutorial[i].icon}" alt="${tutorial[i].tutorial}">
            <h2 class="type">${tutorial[i].tutorial}</h2>
            <br>
            <p class="descrip">${tutorial[i].description}</h3>
            <br>
            <button class='button' type='button' id='button${i}'>Start</button>
            </div>
            `;
            print_tut.innerHTML = print;
            document.getElementById(`button${i}`).addEventListener('click', function() {
                window.location.href = links[i];
            });
    }

}

getJSON();