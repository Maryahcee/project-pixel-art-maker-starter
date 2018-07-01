// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

$(document).ready(function() {
	$('#sizePicker').submit(function(event) {
        clearGrid();
        makeGrid();
        registerMouseHandlers();
        event.preventDefault();
    });
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

// Clearing a grid //
function clearGrid() {
    $('#pixelCanvas').children().remove();
}

//Handle clicks 

function registerMouseHandlers() {
    
    let mouseIsDown = false;

    $('td').on('mousemove', function() {
        if (mouseIsDown) {
            let color = $('#colorPicker').val();
            $(this).css('backgroundColor', color);
        }
    });

    $('td').on('mousedown', function() {
        mouseIsDown = true;
    });

    $('td').on('mouseup', function() {
        mouseIsDown = false;
    });

    // adding color to single cell //
    $('td').on('click', function() {
        let color = $('#colorPicker').val();
        $(this).css('backgroundColor', color);
    });

    // removing color from the cell //      
    $('td').on('dblclick', function() {
        $(this).css('background', 'none');
    })
}

