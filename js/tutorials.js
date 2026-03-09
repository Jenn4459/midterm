const NUM_SQUARES = 5;
let tutorial;
const links = [
    "../pages/variables.html",
    "../pages/conditionals.html",
    "../pages/loops.html",
    "../pages/functions.html",
    "../pages/classes.html"
]

// creating a div for each tutorial page
for (let i=0; i<NUM_SQUARES; i++)
{
    document.write( `<div class='cell' id='${i}'></div>` );
}

// getting the json that holds the tutorial information
function getJSON()
{
    $.getJSON("../data/tutorials.json", 
    function(data)
    {
        tutorial = data["tutorials"];
        showTutorials();

    })
}

// displaying the tutorial
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