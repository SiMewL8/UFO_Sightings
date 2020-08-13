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

function handleClick() {
// on click function which will be a button in html and perform filtering of data
    
    let dateFilter = d3.select("#datetime").property("value");
    // select will match the first element from string 'datetime' id in html tags
    // holds the 'datetime' value

    let filteredData = tableData;
    // original data.js holds as a blank slate variable

    if (dateFilter) {

        filteredData = filteredData.filter(row => row.datetime === dateFilter);
        // filter the default data to show only the date entered
        // Show only the rows where the date is equal to the date filter created above
        // === with strict equality for a perfect match
    
    }
    
    buildTable(filteredData);
    //else return default data
    
}

d3.selectAll("#filter-btn").on("click", handleClick);
// Attach an event to listen for the form button
// selector string for the filter button html id, links directly
// d3 executes handleClick function when the button with id #filter-btn is clicked

buildTable(tableData);
// Build the table when the page loads

// function handleClick() {
//     // Grab the datetime value from the filter
//     let date = d3.select("#datetime").property("value");
//     let filteredData = tableData;
    
//      // Check to see if a date was entered and filter the
//     // data using that date.
//     if (date) {
//       // Apply `filter` to the table data to only keep the
//       // rows where the `datetime` value matches the filter value
//       filteredData = filteredData.filter(row => row.datetime === date);
//     }
    
//      // Rebuild the table using the filtered data
//     // @NOTE: If no date was entered, then filteredData will
//     // just be the original tableData.
//     buildTable(filteredData);
//   }
  
//   // Attach an event to listen for the form button
//   d3.selectAll("#filter-btn").on("click", handleClick);
  
//   // Build the table when the page loads
//   buildTable(tableData);