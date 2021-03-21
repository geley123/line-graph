// //x axis

import { graphDimensions } from "./script.js";
import { xAxisValues } from "./script.js";

console.log("ccc" + xAxisValues);
export const xAxisLine = function () {
  const svgGraph1 = `<line class="axis-line" x1=${
    graphDimensions.marginLeft
  } x2=${graphDimensions.marginLeft + graphDimensions.graphWidth()} y1=${
    graphDimensions.marginTop + graphDimensions.graphHeight()
  } y2=${graphDimensions.marginTop + graphDimensions.graphHeight()}></line>`;

  return svgGraph1;
};

const numberLabels = function () {
  const a = Math.floor(graphDimensions.graphWidth() / xAxisValues.length);
  const b = 15; // 15 is label width
  let c = 0; //how many times b goes into a

  console.log("a=" + a);
  console.log("b=" + b);

  for (let k = 0; k < 100; k++) {
    if (a * k > b) {
      c = k;
      break;
    }
  }

  return c;
};

export const drawxAxisValues = function () {
  const numXaxisLines = xAxisValues.length;
  const xSpacing = graphDimensions.graphWidth() / numXaxisLines;
  let svg = "<g class='labels '>";
  xAxisValues.forEach(function (el, i) {
    if (i % numberLabels() == 0) {
      svg =
        svg +
        `<text class='xLabel'  x=${
          graphDimensions.marginLeft + xSpacing * i
        } y='${
          graphDimensions.marginTop + graphDimensions.graphHeight()
        }' transform='rotate(270 ${graphDimensions.marginLeft + xSpacing * i},${
          graphDimensions.marginTop + graphDimensions.graphHeight()
        }) translate( -40 ,5)'  >${el}</text>`;
    }
  });

  svg = svg + "</g>";
  return svg;
};

// svgGraph = svgGraph +=
//   "<text class='xLabel'  x=" +
//   (graph_x + horizontalSpacing * k + 5) +
//   " y=" +
//   (graph_y + barWidth / 2 + graph_height + 5) +
//   " transform='rotate(270 " +
//   (graph_x + horizontalSpacing * k) +
//   "," +
//   (graph_y + graph_height) +
//   ") translate( -10 ,0)'>" +
//   xAxisArr[k] +
//   "</text>";
