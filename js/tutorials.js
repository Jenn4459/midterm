const NUM_SQUARES = 5;
let tutorial;

for (let i=0; i<NUM_SQUARES; i++)
{
    document.write( `<div class='cell' id='${i}'><button class='button' type='button' id='button'>Start</button></div>` );
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
            </div>
            `;
            print_tut.innerHTML = print;
    }

}

getJSON();