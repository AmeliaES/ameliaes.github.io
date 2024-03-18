---
layout: single
author_profile: true
title: ""
---

# Summary
PhD researcher at the University of Edinburgh using epidemiological and statistical methods for mental health research. Well developed in data cleaning and analysis, R, and statistical modelling.


# My work (section in development)
Click on the nodes below to find out more about a specific project or skill I'm developing. (In development - Portfolio is the only node I've assigned a URL to)

*Insert legend here:*

* dashed lines = skill
* grey background = to do

<div id="network" style="width: 800px; height: 600px;"></div>

<style>
  .dashed-border {
    border: 2px dashed black; /* Adjust thickness and color of the dashed border */
    border-radius: 50%; /* Ensures the border appears as a circle */
  }
</style>

<script>
document.addEventListener('DOMContentLoaded', function () {
  // Define your network data
  var nodes = new vis.DataSet([
    {id: 'portfolio', label: 'Portfolio', url: '/portfolio'}, // Specify URL for Projects node
    {id: 'phd', label: 'PhD'},
    {id: 'other', label: 'Other'},
    {id: 'inflamDepI', label: 'Inflamation in Depression I'}, 
    {id: 'inflamDepII', label: 'Inflamation in Depression II'},
    {id: 'TIDAL', label: 'TIDAL'},
    {id: 'spotipy', label: 'spotify flask app'},
    {id: 'car', label: 'cazzooScraper'},
    {id: 'fitbit', label: 'fitbitR'},
    {id: 'appDev', label: 'app development'},
    {id: 'python', label: 'python'},
    {id: 'R', label: 'R'},
    {id: 'API', label: 'API', label: 'web scraping', color: {background: 'grey', border: 'black'}, shapeProperties: { borderDashes: [5,5]}},
    {id: 'webScrape', label: 'web scraping', color: {background: 'grey', border: 'black'}, shapeProperties: { borderDashes: [5,5]}},
    {id: 'dataVis', label: 'data vis'},
    {id: 'dataClean', label: 'data cleaning'},
    {id: 'stats', label: 'statistics'},
    {id: 'HPC', label: 'high performance computing'}
  ]);

  var edges = new vis.DataSet([
    {from: 'portfolio', to: 'phd'},
    {from: 'portfolio', to: 'other'},
    {from: 'phd', to: 'inflamDepI'},
    {from: 'phd', to: 'inflamDepII'},
    {from: 'TIDAL', to: 'phd'},
    {from: 'other', to: 'spotipy'},
    {from: 'other', to: 'car'},
    {from: 'other', to: 'fitbit'},
    {from: 'other', to: 'appDev'},
    {from: 'spotipy', to: 'python'},
    {from: 'R', to: 'phd'},
    {from: 'R', to: 'fitbitR'},
    {from: 'R', to: 'car'},
    {from: 'webScrape', to: 'car'},
    {from: 'API', to: 'spotipy'},
    {from: 'dataVis', to: 'phd'},
    {from: 'stats', to: 'phd'},
    {from: 'HPC', to: 'phd'},
    {from: 'dataClean', to: 'phd'}
  ]);

  // Create a network
  var container = document.getElementById('network');
  var data = {nodes: nodes, edges: edges};
  var options = {
    layout: {
      randomSeed: 474132,
      hierarchical: {
        enabled: false,
        direction: 'LR', // Set the layout direction: LR (left to right), RL (right to left), TB (top to bottom), BT (bottom to top)
        sortMethod: 'directed' // Optionally, sort nodes by connections
      }
    },
    interaction: {
      //dragNodes: false // Disable node dragging
    }
  };
  var network = new vis.Network(container, data, options);

  // Log the random seed to the console
  console.log("Random Seed:", network.getSeed());

  // Add event listener for clicking on nodes
  network.on('click', function(event) {
    var nodeClicked = nodes.get(event.nodes[0]);
    if (nodeClicked && nodeClicked.url) {
      window.location.href = nodeClicked.url;
    }
  });
});
</script>


