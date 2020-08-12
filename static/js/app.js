// import data from data.js

const tableData = data;

// reference html table using d3
// d3 is a js library produces dynamic graphics in an html page, creates pro dashboards, visual data

var tbodyTag = d3.select("tbody");

function buildTable(data) {
    tbodyTag.html("");
    // clears out any existing data to avoid refiltering

    data.forEach((dataRow) => {
    // adding a forEach loop, works with arrays only, takes in a function and applies a for loop

        let row = tbodyTag.append("tr"); 
        // using let since variable only exists in this block code
        //  tells js to find tbody tag in html and add a table row

        // loop each field in dataRow of data.js, will become table data and <tr> wrapped when appended
        Object.values(dataRow).forEach((val) => {  
        // loop each field in dataRow of data.js, will become table data and <tr> wrapped when appended
        // ob.vals tells js to reference one object from ufo
        // values go ino dataRow, one object per row forEach(val)
        // basically to put each sighting into its own row of data

            let celleach = row.append("td");
            // appends data into table data tag <td>

            celleach.text(val);
            
            }
    
        );

    });

}