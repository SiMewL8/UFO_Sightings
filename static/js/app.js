const tableData = data;
// import data from data.js


var tbodyTag = d3.select("tbody");
// reference html table using d3
// d3 is a js library produces dynamic graphics in an html page, creates pro dashboards, visual data


function buildTable(data) {
    
    tbodyTag.html("");
    // clears out any existing data to avoid refiltering

    data.forEach((dataRow) => {
    // adding a forEach loop, works with arrays only, takes in a function and applies a for loop

        let row = tbodyTag.append("tr"); 
        // using let since variable only exists in this block code
        //  tells js to find tbody tag in html and add a table row

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


var selectfilters = {};
// datetime, city, state, country, shape, durationMinutes, comments



function handleClickFilter() {

    //changed element
    let newElem = d3.select(this);

    //changed value
    let newVal = newElem.property("value");

    //changed id
    let newId = newElem.attr("id");

    // when new value is inputted, adds id and value to selectfilters
    if (newVal) {
        
        selectfilters[newId] = newVal;

    }

    // else clears the filter
    else {
        delete selectfilters[newId];
    }

    filteredTable();

}


function filteredTable() {

    // set filteredData to tableData
    let filteredData = tableData;

    // loop through all filters and keep any data that matches the filter values

    
    Object.entries(selectfilters).forEach(([key, value]) => {
        
        filteredData = filteredData.filter(row => row[key] === value);
    
    }
    
    );

    // rebuild the table using filtered data
    buildTable(filteredData);

}

d3.selectAll("input").on("change", handleClickFilter);


buildTable(tableData);