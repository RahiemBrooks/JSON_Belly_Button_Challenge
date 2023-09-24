# Belly Button Challenge Dashboard

![Dashboard Screenshot](static/screenshots/image1.png)


## Background
In this assignment, you will explore the fascinating world of the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/), which catalogues the microorganisms that inhabit human navels.

The dataset reveals that a small group of microbial species, referred to as operational taxonomic units (OTUs), are prevalent in more than 70% of individuals, while others are relatively rare.

## Instructions
To complete this assignment, follow these steps:

1. Utilize the D3 library to fetch data from the `samples.json` file, which is available at this URL: [samples.json](https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json).

2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in an individual's sample.
    - Utilize `sample_values` as the values for the bar chart.
    - Utilize `otu_ids` as the labels for the bar chart.
    - Utilize `otu_labels` as hover text for the chart.

   ![Bar Chart](static/screenshots/image2.png)

3. Build a bubble chart that visualizes each sample.
    - Utilize `otu_ids` for the x-axis.
    - Utilize `sample_values` for the y-axis.
    - Use `sample_values` to determine the marker size.
    - Apply `otu_ids` for the marker colors.
    - Include `otu_labels` as text values for the markers.

   ![Bubble Chart](static/screenshots/image3.png)

4. Display the sample metadata, which includes an individual's demographic information.

5. Present each key-value pair from the metadata JSON object somewhere on the page.

   ![Metadata](static/screenshots/image4.png)

6. Ensure that all the plots update when a new sample is selected. You have the creative freedom to design the dashboard's layout.

7. Deploy your application to a free static page hosting service, such as GitHub Pages.

## Advanced Challenge Assignment
As an advanced challenge, adapt the Gauge Chart from [Plotly's Gauge Charts](https://plotly.com/javascript/gauge-charts/) to represent the weekly washing frequency of the individual.
- You will need to modify the example gauge code to accommodate values ranging from 0 through 9.
- Update the chart whenever a new sample is selected.

   ![Gauge Chart](static/screenshots/image5.png)

