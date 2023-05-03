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