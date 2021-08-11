const boardSize = 650;
let dims;
let container;

//creates each tile for the grid canvas
function makeGridEle(ms) {
    let ediv = document.createElement("div");
    ediv.classList.add('sketch');
    ediv.addEventListener('mouseover', function(e){ //mouseover changes color if hovered
        e.target.style.backgroundColor = 'black';
        console.log('hoover');
    });
    ediv.style.width = ms / dims + "px";
    console.log(Math.ceil(ms/dims));
    ediv.style.height = ms / dims + "px";

    return ediv;
}

//creates container and adds all the squares to it
function buildBoard(){
    container = document.createElement("div");
    container.classList.add("grid-container");

    for(i=0; i < dims; i++){
        for(j = 0; j < dims; j++){
        let temp = makeGridEle(boardSize);
        container.appendChild(temp);
        }
        let br = document.createElement("br");
        container.appendChild(br);
    }

    document.body.appendChild(container);
}


const newDimBtn = document.createElement('button');
newDimBtn.textContent = "Set Size";
//add an even listener to remove and remake the current board
newDimBtn.addEventListener('click', function(){
    let myobj = document.querySelector(".grid-container"); //select grind then remove it
    myobj.remove();
    dims = prompt("new dimensions?"); //prompt new size
    buildBoard(); //rebuild the board
}, false);

document.body.appendChild(newDimBtn);

//as user for board size
dims = prompt('dimensions?');
//if they enter nothing make it 16x16
if(!dims){
    dims = 16;
}
//if number is too high then reprompt
if(dims >100){
    while(dims > 100)
        dims = prompt("Number too high. enter a number 1-100");
}

//initial board draw
buildBoard();

