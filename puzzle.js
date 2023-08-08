var rows = 3;
var columns = 3;

var currTile;
var otherTile;  //blank tile

var turns = 0;

const ordercon = new Map([]);  //empty map array to track correct tile positions

var randomTile = [0, 1, 2, 3, 4, 5, 6, 7, 8];

function shuffleArray(randomTile) {
    randomTile.sort(() => Math.random() - 0.5);
}

shuffleArray(randomTile);

function getInvCount(arr) {
	let inv_count = 0;
	for (let i = 0; i < 9; i++) {
		for (let j = i + 1; j < 9; j++) {

			// Value 0 is used for empty space
			if (arr[i] > 0 && arr[j] > 0 && arr[i] > arr[j]) {
				inv_count += 1;
                console.log(inv_count);
            }
		}
	}
	return inv_count;   
}

function isSolvable(randomTile) {
	// Count inversions in given 3x3 slide puzzle
	let invCount = getInvCount(randomTile);
	
	return (invCount % 2 == 0);  //returns TRUE if division yields no remainder, inversion count is even
}

while (isSolvable(randomTile) == false) {
    shuffleArray(randomTile);
}

tileOrder = randomTile;

window.onload = function() {
    //below creates rows and columns
    for (let r=0; r < rows; r++) {
        for (let c=0; c < columns; c++) {

            //<img id="0-0" src="berzerk_1.jpg">, creates coordinate and relates an image
            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
			tile.src = "berzerk_" + tileOrder.shift() + ".jpg";

            //Drag functionality
            tile.addEventListener("dragstart", dragStart);  //click an image to drag
            tile.addEventListener("dragover", dragOver);    //moving image around while clicked
            tile.addEventListener("dragenter", dragEnter);  //dragging image onto another image
            tile.addEventListener("dragleave", dragLeave);  //drag an image leaving another image
            tile.addEventListener("drop", dragDrop);        //drag an image over another image, drop the image
            tile.addEventListener("dragend", dragEnd);      //after drag drop, swap the two tiles

            document.getElementById("board").append(tile);

            //Below checks initial tile config for matching tile positions and updates "ordercon"
            if (tile.id == "0-0" && tile.src == "file:///C:/Users/nhguu/Desktop/puzzle%20in%20html/berzerk_1.jpg") {
                ordercon.set("berzerk_1");
            }

            if (tile.id == "0-1" && tile.src == "file:///C:/Users/nhguu/Desktop/puzzle%20in%20html/berzerk_2.jpg") {
                ordercon.set("berzerk_2");
            }

            if (tile.id == "0-2" && tile.src == "file:///C:/Users/nhguu/Desktop/puzzle%20in%20html/berzerk_3.jpg") {
                ordercon.set("berzerk_3");
            }

            if (tile.id == "1-0" && tile.src == "file:///C:/Users/nhguu/Desktop/puzzle%20in%20html/berzerk_4.jpg") {
                ordercon.set("berzerk_4");
            }

            if (tile.id == "1-1" && tile.src == "file:///C:/Users/nhguu/Desktop/puzzle%20in%20html/berzerk_5.jpg") {
                ordercon.set("berzerk_5");
            }

            if (tile.id == "1-2" && tile.src == "file:///C:/Users/nhguu/Desktop/puzzle%20in%20html/berzerk_6.jpg") {
                ordercon.set("berzerk_6");
            }

            if (tile.id == "2-0" && tile.src == "file:///C:/Users/nhguu/Desktop/puzzle%20in%20html/berzerk_7.jpg") {
                ordercon.set("berzerk_7");
            }

            if (tile.id == "2-1" && tile.src == "file:///C:/Users/nhguu/Desktop/puzzle%20in%20html/berzerk_8.jpg") {
                ordercon.set("berzerk_8");
            }
        }
    }
}

function dragStart() {
    currTile = this; //this refers to the img tile being dragged

    //Below checks for correct tile positions that are moved out into incorrect positions, updates "ordercon"
    if (currTile.id == "0-0" && currTile.src == "file:///C:/Users/nhguu/Desktop/puzzle%20in%20html/berzerk_1.jpg") {
        ordercon.delete("berzerk_1");
    }

    if (currTile.id == "0-1" && currTile.src == "file:///C:/Users/nhguu/Desktop/puzzle%20in%20html/berzerk_2.jpg") {
        ordercon.delete("berzerk_2");
    }

    if (currTile.id == "0-2" && currTile.src == "file:///C:/Users/nhguu/Desktop/puzzle%20in%20html/berzerk_3.jpg") {
        ordercon.delete("berzerk_3");
    }

    if (currTile.id == "1-0" && currTile.src == "file:///C:/Users/nhguu/Desktop/puzzle%20in%20html/berzerk_4.jpg") {
        ordercon.delete("berzerk_4");
    }

    if (currTile.id == "1-1" && currTile.src == "file:///C:/Users/nhguu/Desktop/puzzle%20in%20html/berzerk_5.jpg") {
        ordercon.delete("berzerk_5");
    }

    if (currTile.id == "1-2" && currTile.src == "file:///C:/Users/nhguu/Desktop/puzzle%20in%20html/berzerk_6.jpg") {
        ordercon.delete("berzerk_6");
    }

    if (currTile.id == "2-0" && currTile.src == "file:///C:/Users/nhguu/Desktop/puzzle%20in%20html/berzerk_7.jpg") {
        ordercon.delete("berzerk_7");
    }

    if (currTile.id == "2-1" && currTile.src == "file:///C:/Users/nhguu/Desktop/puzzle%20in%20html/berzerk_8.jpg") {
        ordercon.delete("berzerk_8");
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

    if (otherTile.id == "0-0" && currTile.src == "file:///C:/Users/nhguu/Desktop/puzzle%20in%20html/berzerk_1.jpg") {
        ordercon.set("berzerk_1");
    }

    if (otherTile.id == "0-1" && currTile.src == "file:///C:/Users/nhguu/Desktop/puzzle%20in%20html/berzerk_2.jpg") {
        ordercon.set("berzerk_2");
    }

    if (otherTile.id == "0-2" && currTile.src == "file:///C:/Users/nhguu/Desktop/puzzle%20in%20html/berzerk_3.jpg") {
        ordercon.set("berzerk_3");
    }

    if (otherTile.id == "1-0" && currTile.src == "file:///C:/Users/nhguu/Desktop/puzzle%20in%20html/berzerk_4.jpg") {
        ordercon.set("berzerk_4");
    }

    if (otherTile.id == "1-1" && currTile.src == "file:///C:/Users/nhguu/Desktop/puzzle%20in%20html/berzerk_5.jpg") {
        ordercon.set("berzerk_5");
    }

    if (otherTile.id == "1-2" && currTile.src == "file:///C:/Users/nhguu/Desktop/puzzle%20in%20html/berzerk_6.jpg") {
        ordercon.set("berzerk_6");
    }

    if (otherTile.id == "2-0" && currTile.src == "file:///C:/Users/nhguu/Desktop/puzzle%20in%20html/berzerk_7.jpg") {
        ordercon.set("berzerk_7");
    }

    if (otherTile.id == "2-1" && currTile.src == "file:///C:/Users/nhguu/Desktop/puzzle%20in%20html/berzerk_8.jpg") {
        ordercon.set("berzerk_8");
    }

    if (ordercon.size == 8) {
        window.alert("Puzzle solved, GOOD JOB!!!");
    }
}

function dragEnd() {
    if (!otherTile.src.includes("berzerk_0.jpg")) {
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
