// Fetch the JSON data and log it to the console
d3.json(url).then(function(data) {
    console.log(data);
});

// Initialize the dashboard when the page loads
function init() {

    // Use D3 to select the dropdown menu
    let dropdownMenu = d3.select("#selDataset");

    // Use D3 to retrieve sample names and populate the dropdown selector
    d3.json(url).then((data) => {
        
        // Store the sample names in a variable
        let names = data.names;

        // Add samples to the dropdown menu
        names.forEach((id) => {

            // Log the value of each sample ID during iteration
            console.log(id);

            dropdownMenu.append("option")
            .text(id)
            .property("value",id);
        });

        // Set the initial sample to the first one in the list
        let sample_one = names[0];

        // Log the value of the selected initial sample
        console.log(sample_one);

        // Build the initial gauge chart
        buildGaugeChart(sample_one);
    });
};

// Function that builds the gauge chart
function buildGaugeChart(sample) {

    // Use D3 to retrieve all the data
    d3.json(url).then((data) => {

        // Retrieve all metadata
        let metadata = data.metadata;

        // Filter metadata based on the selected sample
        let value = metadata.filter(result => result.id == sample);

        // Log the array of filtered metadata objects
        console.log(value)

        // Get the first index from the array
        let valueData = value[0];

        // Extract the washing frequency value from the metadata
        let washFrequency = Object.values(valueData)[6];
        
        // Set up the trace for the gauge chart
        let trace2 = {
            value: washFrequency,
            domain: {x: [0, 1], y: [0, 1]},
            title: {
                text: "<b>Belly Button Washing Frequency</b><br>Scrubs per Week",
                font: {color: "black", size: 16}
            },
            type: "indicator",
            mode: "gauge+number",
            gauge: {
                axis: {range: [0, 10], tickmode: "linear", tick0: 2, dtick: 2},
                bar: {color: "black"},
                steps: [
                    {range: [0, 1], color: "rgba(255, 255, 255, 0)"},
                    {range: [1, 2], color: "rgba(232, 226, 202, .5)"},
                    {range: [2, 3], color: "rgba(210, 206, 145, .5)"},
                    {range: [3, 4], color:  "rgba(202, 209, 95, .5)"},
                    {range: [4, 5], color:  "rgba(184, 205, 68, .5)"},
                    {range: [5, 6], color: "rgba(170, 202, 42, .5)"},
                    {range: [6, 7], color: "rgba(142, 178, 35 , .5)"},
                    {range: [7, 8], color:  "rgba(110, 154, 22, .5)"},
                    {range: [8, 9], color: "rgba(50, 143, 10, 0.5)"},
                    {range: [9, 10], color: "rgba(14, 127, 0, .5)"},
                ]
            } 
        };

        // Set up the layout
        let layout = {
            width: 400, 
            height: 400,
            margin: {t: 0, b:0}
        };

        // Call Plotly to plot the gauge chart
        Plotly.newPlot("gauge", [trace2], layout)
    });
};

// Call the initialize function to start the dashboard
init();
