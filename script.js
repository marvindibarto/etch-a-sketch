//variable to initialize size of squares for when website is visited
let size = "16px"
//i think this is actually irrelevant
    let width = window.innerWidth;
    let height = window.innerHeight;
    console.log(width+" this was width - this is height: "+height)
    // let amountSquares = width*height/16/1


//select target for squares to be put in
const div = document.querySelector("div");

//style div of container of squares
div.style.margin = 0;
div.style.padding = 0;
div.style.border = 0;
div.style.display = "flex";
div.style.flexWrap = "wrap";


produceSquares(100);

//create function to produce an amount of squares and append them to the div
function produceSquares(amount){
    let squares = [];
    for (let i = 0; i < amount; i++){
        squares.push(document.createElement("div"));
        div.appendChild(squares[i]);
    }
}

//give no boarder etc. to all children inside the div
for (const child of div.children){
    console.log(child);
    child.style.margin = 0;
    child.style.padding = 0;
    child.style.border = 0;
    child.style.height = size;
    child.style.width = size;
    child.style.flexGrow = 0;
    child.style.flexShrink = 0;
    child.style.backgroundColor = "blue";
}



