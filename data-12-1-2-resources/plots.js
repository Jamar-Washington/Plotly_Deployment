var trace = {
    x: [1, 82, 32, 68, 3, 7, 3, 63],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    mode: "markers",
    type: "scatter"
};

var data = [trace];

var layout = {
    title: "Scatter plot",
    // xaxis:{title: "Drinks"},
    // yaxis: {title: "Percentage (%)"}
};

Plotly.newPlot("plotArea", data, layout);

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

var Species = words.splice(0,3);

console.log(Species);