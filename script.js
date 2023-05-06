// Access body element
const body = document.body;

// Access HTML container div
const container = document.querySelector(".container");

// Create function to generate new grid
function generateGrid(squareNumber) {
    // Clear existing grid
    container.innerHTML = "";

    // square size
    const squareSize = "50px";

    //Looping through each row
    for (let i = 0; i < squareNumber; i++) {

        //creating rows
        const row = document.createElement("div");
        row.classList.add("row");

        //Looping through each column
        for (let c = 0; c < squareNumber; c++) {

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
    squares.forEach(function (square) {
        square.addEventListener("click", function () {
            square.style.backgroundColor = "rgb(158 158 255)";
        });
    });
}

// Call generateGrid function with default number of squares
generateGrid(8);

// Create a reset button and append it to the container div
const resetButton = document.createElement("button");
resetButton.setAttribute('id', 'reset-button');
resetButton.textContent = "Reset";
body.appendChild(resetButton);

// Add a click event listener to the reset button that sets all squares back to the default color
resetButton.addEventListener("click", function () {
    const squares = document.querySelectorAll(".square");
    squares.forEach(function (square) {
        square.style.backgroundColor = "";
    });
});

// Create a new grid button and append it to the container div
const newGridButton = document.createElement("button");
newGridButton.setAttribute('id', 'new-grid-button');
newGridButton.textContent = "New Grid";
body.appendChild(newGridButton);

// Add a click event listener to the new grid button that prompts the user for the number of squares and generates a new grid
newGridButton.addEventListener("click", function () {
    const newSquareNumber = Number(prompt("Enter number of squares per side (maximum 100):"));

    // Check if user input is valid
    if (!isNaN(newSquareNumber) && newSquareNumber > 0 && newSquareNumber <= 100) {
        generateGrid(newSquareNumber);
    } else {
        alert("Invalid input. Please enter a number between 1 and 100.");
    }
});
