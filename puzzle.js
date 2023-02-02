
var rows = 3;
var columns = 3;

var currTile;
var otherTile;  //blank tile

var turns = 0;

// var a1 = "berzerk_1";  //array for tile shuffling
// var a2 = "berzerk_2";
// var a3 = "berzerk_3";
// var a4 = "berzerk_4";
// var a5 = "berzerk_5";
// var a6 = "berzerk_6";
// var a7 = "berzerk_7";
// var a8 = "berzerk_8";
// var a9 = "berzerk_9";
// const imgOrder = [a1, a2, a3, a4, a5, a6, a7 ,a8 ,a9];    //array for tile shuffling

// var imgOrder = ["berzerk_1", "berzerk_2", "berzerk_3", "berzerk_4", "berzerk_5", "berzerk_6", "berzerk_7", "berzerk_8", "berzerk_9"]
// var imgOrder = ["berzerk_4", "berzerk_2", "berzerk_8", "berzerk_5", "berzerk_1", "berzerk_6", "berzerk_7", "berzerk_9", "berzerk_3"]; //odd inversions, not solvable
// var imgOrder = ["berzerk_9", "berzerk_4", "berzerk_2", "berzerk_8", "berzerk_1", "berzerk_6", "berzerk_7", "berzerk_5", "berzerk_3"];
const imgOrder = ["berzerk_9", "berzerk_4", "berzerk_2", "berzerk_8", "berzerk_1", "berzerk_6", "berzerk_7", "berzerk_5", "berzerk_3"];

const ordercon = new Map([]);  //empty map array for puzzle tile/coordinate matches


// function shuffleArray(imgOrder) {
//     imgOrder.sort(() => Math.random() - 0.5);
// }

// shuffleArray(imgOrder);
// console.log(imgOrder);

window.onload = function() {
    //below creates rows and columns
    for (let r=0; r < rows; r++) {
        for (let c=0; c < columns; c++) {

            //<img id="0-0" src="berzerk_1.jpg">, creates coordinate and relates an image
            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
            tile.src = imgOrder.shift() + ".jpg";

            //Drag functionality
            tile.addEventListener("dragstart", dragStart);  //click an image to drag
            tile.addEventListener("dragover", dragOver);    //moving image around while clicked
            tile.addEventListener("dragenter", dragEnter);  //dragging image onto another image
            tile.addEventListener("dragleave", dragLeave);  //drag an image leaving another image
            tile.addEventListener("drop", dragDrop);        //drag an image over another image, drop the image
            tile.addEventListener("dragend", dragEnd);      //after drag drop, swap the two tiles

            document.getElementById("board").append(tile);
            // console.log(tile.src)
            
        }
    }
}

function dragStart() {
    currTile = this; //this refers to the img tile being dragged
    // console.log(currTile);

    if (currTile.id == "0-0" && currTile.src == "file:///C:/Users/nhguu/Desktop/puzzle%20in%20html_TESTING/berzerk_1.jpg") {
        ordercon.delete("berzerk_1");
        console.log(ordercon);
    }

    if (currTile.id == "0-1" && currTile.src == "file:///C:/Users/nhguu/Desktop/puzzle%20in%20html_TESTING/berzerk_2.jpg") {
        ordercon.delete("berzerk_2");
        console.log(ordercon);
    }

    if (currTile.id == "0-2" && currTile.src == "file:///C:/Users/nhguu/Desktop/puzzle%20in%20html_TESTING/berzerk_3.jpg") {
        ordercon.delete("berzerk_3");
        console.log(ordercon);
    }

    if (currTile.id == "1-0" && currTile.src == "file:///C:/Users/nhguu/Desktop/puzzle%20in%20html_TESTING/berzerk_4.jpg") {
        ordercon.delete("berzerk_4");
        console.log(ordercon);
    }

    if (currTile.id == "1-1" && currTile.src == "file:///C:/Users/nhguu/Desktop/puzzle%20in%20html_TESTING/berzerk_5.jpg") {
        ordercon.delete("berzerk_5");
        console.log(ordercon);
    }

    if (currTile.id == "1-2" && currTile.src == "file:///C:/Users/nhguu/Desktop/puzzle%20in%20html_TESTING/berzerk_6.jpg") {
        ordercon.delete("berzerk_6");
        console.log(ordercon);
    }

    if (currTile.id == "2-0" && currTile.src == "file:///C:/Users/nhguu/Desktop/puzzle%20in%20html_TESTING/berzerk_7.jpg") {
        ordercon.delete("berzerk_7");
        console.log(ordercon);
    }

    if (currTile.id == "2-1" && currTile.src == "file:///C:/Users/nhguu/Desktop/puzzle%20in%20html_TESTING/berzerk_8.jpg") {
        ordercon.delete("berzerk_8");
        console.log(ordercon);
    }
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {
    
}

function dragDrop() {
    otherTile = this; //this refers to the img tile being dropped on
    // console.log(otherTile);

    if (otherTile.id == "0-0" && currTile.src == "file:///C:/Users/nhguu/Desktop/puzzle%20in%20html_TESTING/berzerk_1.jpg") {
        ordercon.set("berzerk_1");
        console.log(ordercon);
    }

    if (otherTile.id == "0-1" && currTile.src == "file:///C:/Users/nhguu/Desktop/puzzle%20in%20html_TESTING/berzerk_2.jpg") {
        ordercon.set("berzerk_2");
        console.log(ordercon);
    }

    if (otherTile.id == "0-2" && currTile.src == "file:///C:/Users/nhguu/Desktop/puzzle%20in%20html_TESTING/berzerk_3.jpg") {
        ordercon.set("berzerk_3");
        console.log(ordercon);
    }

    if (otherTile.id == "1-0" && currTile.src == "file:///C:/Users/nhguu/Desktop/puzzle%20in%20html_TESTING/berzerk_4.jpg") {
        ordercon.set("berzerk_4");
        console.log(ordercon);
    }

    if (otherTile.id == "1-1" && currTile.src == "file:///C:/Users/nhguu/Desktop/puzzle%20in%20html_TESTING/berzerk_5.jpg") {
        ordercon.set("berzerk_5");
        console.log(ordercon);
    }

    if (otherTile.id == "1-2" && currTile.src == "file:///C:/Users/nhguu/Desktop/puzzle%20in%20html_TESTING/berzerk_6.jpg") {
        ordercon.set("berzerk_6");
        console.log(ordercon);
    }

    if (otherTile.id == "2-0" && currTile.src == "file:///C:/Users/nhguu/Desktop/puzzle%20in%20html_TESTING/berzerk_7.jpg") {
        ordercon.set("berzerk_7");
        console.log(ordercon);
    }

    if (otherTile.id == "2-1" && currTile.src == "file:///C:/Users/nhguu/Desktop/puzzle%20in%20html_TESTING/berzerk_8.jpg") {
        ordercon.set("berzerk_8");
        console.log(ordercon);
    }

    if (ordercon.size == 8) {
        window.alert("GOOD JOB!!!");
    }
}

function dragEnd() {
    if (!otherTile.src.includes("berzerk_9.jpg")) {
        return;
    }

    let currCoords = currTile.id.split("-"); //ex) "0-0" -> ["0", "0"]
    let r = parseInt(currCoords[0]);
    let c = parseInt(currCoords[1]);

    let otherCoords = otherTile.id.split("-");
    let r2 = parseInt(otherCoords[0]);
    let c2 = parseInt(otherCoords[1]);

    let moveLeft = r == r2 && c2 == c-1;
    let moveRight = r == r2 && c2 == c+1;

    let moveUp = c == c2 && r2 == r-1;
    let moveDown = c == c2 && r2 == r+1;

    let isAdjacent = moveLeft || moveRight || moveUp || moveDown;

    if (isAdjacent) {
        let currImg = currTile.src;
        let otherImg = otherTile.src;

        currTile.src = otherImg;
        otherTile.src = currImg;

        turns += 1;
        document.getElementById("turns").innerText = turns;

    }
}
