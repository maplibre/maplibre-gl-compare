"use strict";

require("../");

// 'Before' style from https://github.com/lukasmartinelli/naturalearthtiles
var before = new maplibregl.Map({
  container: "before",
  style: "https://raw.githubusercontent.com/lukasmartinelli/naturalearthtiles/gh-pages/maps/natural_earth.vector.json",
  zoom: 2
});

// 'After' style from https://github.com/maplibre/demotiles
var after = new maplibregl.Map({
  container: "after",
  style: "https://demotiles.maplibre.org/style.json",
  zoom: 2
});

// Use either of these patterns to select a container for the compare widget
var wrapperSelector = "#wrapper";
var wrapperElement = document.body.querySelectorAll("#wrapper")[0];

// available options
var options = {
  mousemove: true,
  orientation: "horizontal",
};

window.compare = new maplibregl.Compare(
  before,
  after,
  wrapperSelector
  // options
);

var closeButton = document.getElementById("close-button");

closeButton.addEventListener("click", function (e) {
  after.getContainer().style.display = "none";
  window.compare.remove();
  after.remove();
});
