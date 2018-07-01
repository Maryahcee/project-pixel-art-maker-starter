// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

$(document).ready(function() {
	makeGrid();
});


function makeGrid() {

let inputHeight = $("#inputHeight").val();
let inputWidth = $("#inputWidth").val();
let grid_table = $("#pixelCanvas");

// draw the grid 
for (let r = 1; r <= inputHeight; r++) {
    // create row
    let row = $('<tr></tr>').appendTo(grid_table);
    for (let c = 1; c <= inputWidth; c++) {
        // create table cells (columns)
        row.append('<td></td>');
    }
}

}
