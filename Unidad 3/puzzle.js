// W3 1

document.write("<h1>Puzzle</h1>");

// Measurement of the puzzle

var columns = prompt("Choose the columns:");
var rows = prompt("Choose the rows:");

// Construction of the puzzle

class puzzle {
    constructor (rows, columns){
        this.rows=rows;
        this.columns=columns;
    };

    createPuzzle() {
        var arr = Array (this.rows*this.columns);

        // Insert values on the array

        for(let i=0; i<arr.length; i++){
            arr[i]=i;
        };

        // Mix values of the array

        var j, x, z;
        for (z = arr.length - 1; z > 0; z--) {
            j = Math.floor(Math.random() * (z + 1));
            x = arr[z];
            arr[z] = arr[j];
            arr[j] = x;
        };

        // Create the table and insert values on the table

        var auxCount = 0;

        document.write("<table>");
            for(let i=0; i<rows; i++){
                document.write("<tr height=20>");

                // Insert the values on every single cell
                
                for(let k=0; k<columns; k++){
                    document.write("<td width=20>");
                    document.write(""+arr[auxCount]);
                    document.write("</td>");
                    
                    auxCount++;
                }

                document.write("</tr>");
            };
        document.write("</table>");
    };

};