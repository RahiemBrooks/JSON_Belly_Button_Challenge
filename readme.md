# Belly Button Challenge Dashboard

<img width="948" alt="image1" src="https://github.com/RahiemBrooks/JSON_Belly_Button_Challenge/assets/135518113/d7a21e8c-597f-4d5f-bcb4-81c20db32f10">


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
      
<img width="383" alt="image2" src="https://github.com/RahiemBrooks/JSON_Belly_Button_Challenge/assets/135518113/f0627af2-f639-455f-a081-6e04dbf71b74">

3. Build a bubble chart that visualizes each sample.
    - Utilize `otu_ids` for the x-axis.
    - Utilize `sample_values` for the y-axis.
    - Use `sample_values` to determine the marker size.
    - Apply `otu_ids` for the marker colors.
    - Include `otu_labels` as text values for the markers.
  
<img width="891" alt="image3" src="https://github.com/RahiemBrooks/JSON_Belly_Button_Challenge/assets/135518113/7b170da1-9161-4e45-998a-230b4f8d7ca8">

4. Display the sample metadata, which includes an individual's demographic information.

5. Present each key-value pair from the metadata JSON object somewhere on the page.
   
<img width="139" alt="image4" src="https://github.com/RahiemBrooks/JSON_Belly_Button_Challenge/assets/135518113/fbe6e9f6-11d6-4c1a-80b9-f05c92fd622f">

7. Ensure that all the plots update when a new sample is selected. You have the creative freedom to design the dashboard's layout.

8. Deploy your application to a free static page hosting service, such as GitHub Pages.

## Advanced Challenge Assignment
As an advanced challenge, adapt the Gauge Chart from [Plotly's Gauge Charts](https://plotly.com/javascript/gauge-charts/) to represent the weekly washing frequency of the individual.
- You will need to modify the example gauge code to accommodate values ranging from 0 through 9.
- Update the chart whenever a new sample is selected.

<img width="275" alt="image5" src="https://github.com/RahiemBrooks/JSON_Belly_Button_Challenge/assets/135518113/7a8f5343-93d3-4cbd-862b-2fd693720167">


