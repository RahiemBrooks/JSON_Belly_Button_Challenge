// Define a constant variable for the JSON data URL
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

// Fetch the JSON data and log it to the console
d3.json(url).then(function(data) {
  console.log(data);
});

// Initialize the dashboard when the page loads
function init() {

    // Select the dropdown menu using D3
    let dropdownMenu = d3.select("#selDataset");

    // Retrieve sample names from the JSON data and populate the dropdown selector
    d3.json(url).then((data) => {
        
        // Extract sample names
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

        // Build the initial plots and metadata
        buildMetadata(sample_one);
        buildBarChart(sample_one);
        buildBubbleChart(sample_one);
        buildGaugeChart(sample_one);

    });
};

// Function to populate metadata information
function buildMetadata(sample) {

    // Retrieve all the data using D3
    d3.json(url).then((data) => {

        // Extract all metadata
        let metadata = data.metadata;

        // Filter metadata based on the selected sample
        let selectedMetadata = metadata.filter(result => result.id == sample);

        // Log the array of filtered metadata objects
        console.log(selectedMetadata)

        // Get the first index from the filtered array
        let metadataForSample = selectedMetadata[0];

        // Clear the existing metadata
        d3.select("#sample-metadata").html("");

        // Use Object.entries to add each key/value pair to the metadata panel
        Object.entries(metadataForSample).forEach(([key, value]) => {

            // Log the individual key/value pairs as they are appended to the metadata panel
            console.log(key, value);

            d3.select("#sample-metadata").append("h5").text(`${key}: ${value}`);
        });
    });

};

// Function to build the bar chart
function buildBarChart(sample) {

    // Retrieve all the data using D3
    d3.json(url).then((data) => {

        // Extract all sample data
        let sampleInfo = data.samples;

        // Filter sample data based on the selected sample
        let selectedSampleData = sampleInfo.filter(result => result.id == sample);

        // Get the first index from the filtered array
        let sampleData = selectedSampleData[0];

        // Extract the OTU IDs, labels, and sample values
        let otu_ids = sampleData.otu_ids;
        let otu_labels = sampleData.otu_labels;
        let sample_values = sampleData.sample_values;

        // Log the data to the console
        console.log(otu_ids, otu_labels, sample_values);

        // Select the top ten items to display in descending order
        let yticks = otu_ids.slice(0, 10).map(id => `OTU ${id}`).reverse();
        let xticks = sample_values.slice(0, 10).reverse();
        let labels = otu_labels.slice(0, 10).reverse();
        
        // Set up the trace for the bar chart
        let trace = {
            x: xticks,
            y: yticks,
            text: labels,
            type: "bar",
            orientation: "h"
        };

        // Set up the layout
        let layout = {
            title: "Top 10 OTUs Present"
        };

        // Use Plotly to plot the bar chart
        Plotly.newPlot("bar", [trace], layout)
    });
};

// Function to build the bubble chart
function buildBubbleChart(sample) {

    // Retrieve all the data using D3
    d3.json(url).then((data) => {
        
        // Extract all sample data
        let sampleInfo = data.samples;

        // Filter sample data based on the selected sample
        let selectedSampleData = sampleInfo.filter(result => result.id == sample);

        // Get the first index from the filtered array
        let sampleData = selectedSampleData[0];

        // Extract the OTU IDs, labels, and sample values
        let otu_ids = sampleData.otu_ids;
        let otu_labels = sampleData.otu_labels;
        let sample_values = sampleData.sample_values;

        // Log the data to the console
        console.log(otu_ids, otu_labels, sample_values);
        
        // Set up the trace for the bubble chart
        let trace1 = {
            x: otu_ids,
            y: sample_values,
            text: otu_labels,
            mode: "markers",
            marker: {
                size: sample_values,
                color: otu_ids,
                colorscale: "Earth"
            }
        };

        // Set up the layout
        let layout = {
            title: "Bacteria Per Sample",
            hovermode: "closest",
            xaxis: { title: "OTU ID" },
        };

        // Use Plotly to plot the bubble chart
        Plotly.newPlot("bubble", [trace1], layout)
    });
};

// Function to update the dashboard when the sample is changed
function optionChanged(value) { 

    // Log the new selected value
    console.log(value); 

    // Call all functions to rebuild the dashboard
    buildMetadata(value);
    buildBarChart(value);
    buildBubbleChart(value);
    buildGaugeChart(value);
};

// Call the initialize function to start the dashboard
init();
