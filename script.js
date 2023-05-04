// Access body element
const body =  document.body;

// Access HTML container div
const container = document.querySelector(".container");

// number of squares
let squareNumber = Number(prompt("> "));

if (!squareNumber){
    squareNumber = 8;
};

// square size
const squareSize = "50px";

//Looping through each row
for(let i=0; i<squareNumber; i++){
    
    //creating rows
    const row = document.createElement("div");
    row.classList.add("row");

    //Looping through each column
    for(let c=0; c<squareNumber; c++){

        //creating new sqaure divs
        const square = document.createElement("div");
        square.classList.add("square");

        //Setting height and width of squares
        square.style.width = squareSize;
        square.style.height = squareSize;

        //Inserting the squares into row
        row.appendChild(square);
    }

    //Inserting row into container
    container.appendChild(row);
}

// Get all the squares
const squares = document.querySelectorAll(".square");

// Loop through each square and add a click event listener
squares.forEach(function(square) {
    square.addEventListener("click", function() {
        square.style.backgroundColor = "rgb(158 158 255)";
    });
});

// Create a reset button and append it to the container div
const resetButton = document.createElement("button");
resetButton.setAttribute('id', 'reset-button');
resetButton.textContent = "Reset";
body.appendChild(resetButton);

// Add a click event listener to the reset button that sets all squares back to the default color
resetButton.addEventListener("click", function() {
    squares.forEach(function(square) {
        square.style.backgroundColor = "";
    });
});
