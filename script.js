//variable to initialize size of squares for when website is visited
let size = "16px"
let amount = 5;
//i think this is actually irrelevant
    let width = window.innerWidth;
    let height = window.innerHeight;
    console.log(width+" this was width - this is height: "+height)
    // let amountSquares = width*height/16/1





const colors = [];
colors.push("red");
colors.push("green");
colors.push("blue");
colors.push("orange");
colors.push("yellow");
colors.push("grey");
colors.push("purple");
colors.push("greenyellow");
colors.push("wheat");
colors.push("firebrick");


    // select target for squares to be put in
const div = document.querySelector("div");

//style div of container of squares
div.style.margin = 0;
div.style.padding = 0;
div.style.border = 0;
div.style.display = "flex";
div.style.flexWrap = "wrap";

//create and style button on top of page
const buttonDiv = document.createElement("div");
buttonDiv.style.width = "100%";
buttonDiv.style.height = "20px";
//class needed for distinction to square elements when formatting
buttonDiv.classList.add("btn");

const inputButton = document.createElement("button");
inputButton.textContent = "Change number of squares";
inputButton.addEventListener("click", getInput)

div.appendChild(buttonDiv);
buttonDiv.appendChild(inputButton);

//we need an extra div to later delete all children but NOT the button
const squareDiv = document.createElement("div");
//style div of container of squares
squareDiv.style.margin = 0;
squareDiv.style.padding = 0;
squareDiv.style.border = 0;
squareDiv.style.display = "flex";
squareDiv.style.flexWrap = "wrap";
div.appendChild(squareDiv);




//call function to produce the wanted amount of squares
produceSquares(amount);


//all needed functions
function getInput(){
    amount = prompt("Please enter the number of squares to be created:","Enter number");
    removeChildren();
    produceSquares(amount);
    // setStartProperties();
}

//create function to produce an amount of squares and append them to the div
function produceSquares(amount){
    let squares = [];
    for (let i = 0; i < amount; i++){
        squares.push(document.createElement("div"));
        setStartProperties(squares[i]);
        //this was outsourced to function setStartProperties
        // squares[i].style.margin = 0;
        // squares[i].style.padding = 0;
        // squares[i].style.border = 0;
        // squares[i].style.height = size;
        // squares[i].style.width = size;
        // squares[i].style.flexGrow = 0;
        // squares[i].style.flexShrink = 0;
        // squares[i].style.backgroundColor = "blue";
        // squares[i].addEventListener("mouseenter",(event)=>{
        //     event.target.style.backgroundColor = "red";
        // })
        squareDiv.appendChild(squares[i]);
    }
}

function setStartProperties(child){
    //give no boarder etc. to all children inside the div which are not the btn-div
    for (children in squareDiv){
            child.style.margin = 0;
            child.style.padding = 0;
            child.style.border = 0;
            child.style.height = size;
            child.style.width = size;
            child.style.flexGrow = 0;
            child.style.flexShrink = 0;
            child.style.backgroundColor = "blue";

            //this is one way to make the background color change when the mouse enters the dedicated square
            child.addEventListener("mouseenter",(event)=>{
                
                event.target.style.backgroundColor = colors[Math.floor(Math.random()*9)];

            })
    

            //this is the other way and completely interchangable but needs a style.css sheet (see there for more infos)
            // child.addEventListener("mouseenter",(event)=>{
            //     event.target.classList.add("hovered1");
                
            // })
    }
}

function removeChildren(){
    squareDiv.replaceChildren();
}