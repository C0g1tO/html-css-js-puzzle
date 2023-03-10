
var rows = 3;
var columns = 3;

var currTile;
var otherTile;  //blank tile

var turns = 0;

const ordercon = new Map([]);  //empty map array for puzzle tile/coordinate match entries

// var imgOrder = ["berzerk_1", "berzerk_8", "berzerk_2", "berzerk_9", "berzerk_4", "berzerk_3", "berzerk_7", "berzerk_6", "berzerk_5"];
// var imgOrder = ["berzerk_4", "berzerk_2", "berzerk_8", "berzerk_5", "berzerk_1", "berzerk_6", "berzerk_7", "berzerk_9", "berzerk_3"]; //odd inversions, not solvable
// var imgOrder = ["berzerk_9", "berzerk_4", "berzerk_2", "berzerk_8", "berzerk_1", "berzerk_6", "berzerk_7", "berzerk_5", "berzerk_3"];
const imgOrder = ["berzerk_9", "berzerk_4", "berzerk_2", "berzerk_8", "berzerk_1", "berzerk_6", "berzerk_7", "berzerk_5", "berzerk_3"];

//current problem with randomization:  tiles can be arranged into a "non-solvable puzzle"
// function shuffleArray(imgOrder) {
//     imgOrder.sort(() => Math.random() - 0.5);
// }

// shuffleArray(imgOrder);
// console.log(imgOrder);


// JavaScript program to check if a given
// instance of 8 puzzle is solvable or not
// A utility function to count inversions
// in given array 'arr[]'
function getInvCount(arr) {
	let inv_count = 0 ;
	for(let i=0; i<2; i++) {
		for(let j=i+1; j<3; j++) {
		
			// Value 0 is used for empty space
			if (arr[j][i] > 0 && arr[j][i] > arr[i][j]) {
				inv_count += 1;
            }
		}
	}
    // console.log(inv_count);
	return inv_count;
    
}
// This function returns true
// if given 8 puzzle is solvable.
function isSolvable(puzzle) {
	// Count inversions in given 8 puzzle
	let invCount = getInvCount(puzzle);
	// return true if inversion count is even.
    // console.log(invCount);
	return (invCount % 2 == 0);
}
// Driver code
// Value 0 is used for empty space
// puzzle = [[4, 2, 8],[5, 1, 6],[7, 0, 3]];  //should be unsolvable
puzzle = [[1, 8, 2],[0, 4, 3],[7, 6, 5]];  //should be solvable

if(isSolvable(puzzle)) {
	document.write("Solvable");
} else {
	document.write("Not Solvable");
}


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

            // console.log(tile.src);

            //checks initial tile config for matching tile/coords and adds to map
            if (tile.id == "0-0" && tile.src == "file:///C:/Users/nhguu/Desktop/puzzle%20in%20html_TESTING/berzerk_1.jpg") {
                ordercon.set("berzerk_1");
            }

            if (tile.id == "0-1" && tile.src == "file:///C:/Users/nhguu/Desktop/puzzle%20in%20html_TESTING/berzerk_2.jpg") {
                ordercon.set("berzerk_2");
            }

            if (tile.id == "0-2" && tile.src == "file:///C:/Users/nhguu/Desktop/puzzle%20in%20html_TESTING/berzerk_3.jpg") {
                ordercon.set("berzerk_3");
            }

            if (tile.id == "1-0" && tile.src == "file:///C:/Users/nhguu/Desktop/puzzle%20in%20html_TESTING/berzerk_4.jpg") {
                ordercon.set("berzerk_4");
            }

            if (tile.id == "1-1" && tile.src == "file:///C:/Users/nhguu/Desktop/puzzle%20in%20html_TESTING/berzerk_5.jpg") {
                ordercon.set("berzerk_5");
            }

            if (tile.id == "1-2" && tile.src == "file:///C:/Users/nhguu/Desktop/puzzle%20in%20html_TESTING/berzerk_6.jpg") {
                ordercon.set("berzerk_6");
            }

            if (tile.id == "2-0" && tile.src == "file:///C:/Users/nhguu/Desktop/puzzle%20in%20html_TESTING/berzerk_7.jpg") {
                ordercon.set("berzerk_7");
            }

            if (tile.id == "2-1" && tile.src == "file:///C:/Users/nhguu/Desktop/puzzle%20in%20html_TESTING/berzerk_8.jpg") {
                ordercon.set("berzerk_8");
            }
        }
    }
}

function dragStart() {
    currTile = this; //this refers to the img tile being dragged

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
