// Access body element
const body = document.body;

// Access HTML container div
const container = document.querySelector(".container");

// Create function to calculate square size
function calculateSquareSize(squareNumber) {
  // Get the width of the container
  const containerWidth = container.offsetWidth;

  // Calculate the maximum square size based on the number of squares and the container width
  const maxSquareSize = Math.floor(containerWidth / squareNumber);

  // Return the maximum square size as a string with "px" appended
  return `${maxSquareSize}px`;
}

// Create function to generate new grid
function generateGrid(squareNumber) {
  // Clear existing grid
  container.innerHTML = "";

  // Calculate square size based on the number of squares and the container size
  const squareSize = calculateSquareSize(squareNumber);

  // Loop through each row
  for (let i = 0; i < squareNumber; i++) {
    // Create a new row
    const row = document.createElement("div");
    row.classList.add("row");

    // Loop through each column
    for (let c = 0; c < squareNumber; c++) {
      // Create a new square
      const square = document.createElement("div");
      square.classList.add("square");

      // Set the square size
      square.style.width = squareSize;
      square.style.height = squareSize;

      // Add the square to the row
      row.appendChild(square);
    }

    // Add the row to the container
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
resetButton.setAttribute("id", "reset-button");
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
newGridButton.setAttribute("id", "new-grid-button");
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
