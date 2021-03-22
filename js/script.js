import { channelData } from "./data.js"; //import channel array
import { xAxisValues } from "./data.js";
import { getHighValue } from "./highValue.js"; //function to get highest value
import { setMaxYaxis } from "./setMaxYaxis.js";
import { graphDimensions } from "./graphDimensions.js";
import { yAxisLine } from "./yAxisLine.js";
import { yAxisValues } from "./yAxisLine.js";
import { horizontalLines } from "./yAxisLine.js";
import { xAxisLine } from "./xAxisLine.js";
import { drawxAxisValues } from "./xAxisLine.js";
import { verticalLines } from "./xAxisLine.js";
import { doKey } from "./key.js";
import { drawDataLines } from "./graphDataLines.js";
import { drawPubliSquares } from "./publi.js";
import { svgFooter } from "./svgFooter.js";

const graphContainer = document.getElementById("graph-container");

export { channelData }; //make channel data available to other modules
export { xAxisValues };
let highValue = 0; //set highest value
let maxY = 0;
export { maxY };
export { graphDimensions };

export let svgGraph = "";
export const init = function () {
  highValue = getHighValue(); //set highest value
  maxY = setMaxYaxis(highValue);
  console.log("init");
  svgGraph = `<svg id='graph' class='linegraph' width=${graphDimensions.svgWidth} height=${graphDimensions.svgHeight} version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg'>`;
  svgGraph = svgGraph + yAxisLine();
  svgGraph = svgGraph + xAxisLine();
  svgGraph = svgGraph + yAxisValues();
  svgGraph = svgGraph + drawxAxisValues();
  svgGraph = svgGraph + horizontalLines();
  svgGraph = svgGraph + verticalLines();
  svgGraph = svgGraph + drawDataLines();
  svgGraph = svgGraph + drawPubliSquares();
  svgGraph = svgGraph + svgFooter();
  graphContainer.innerHTML = svgGraph;
};
init();
doKey();

//document.getElementById("graph-container").innerHTML = svgGraph;
//console.log(svgGraph);
