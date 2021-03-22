// //x axis

import { graphDimensions } from "./script.js";
import { xAxisValues } from "./script.js";

const numXaxisLines = xAxisValues.length;
const xSpacing = graphDimensions.graphWidth() / (numXaxisLines - 1);

export const xAxisLine = function () {
  const svgGraph1 = `<line class="axis-line" x1=${
    graphDimensions.marginLeft
  } x2=${graphDimensions.marginLeft + graphDimensions.graphWidth()} y1=${
    graphDimensions.marginTop + graphDimensions.graphHeight()
  } y2=${graphDimensions.marginTop + graphDimensions.graphHeight()}></line>`;

  return svgGraph1;
};

const numberLabels = function () {
  const a = Math.floor(xSpacing);
  const b = 15; // 15 is label width
  let c = 0; //how many times a goes into b +1

  for (let k = 0; k < 100; k++) {
    if (a * k > b) {
      c = k;
      break;
    }
  }
  return c;
};

export const drawxAxisValues = function () {
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

export const verticalLines = function () {
  let svg = `<g class='grid'>`;
  xAxisValues.forEach(function (_, i) {
    if (i % numberLabels() == 0) {
      svg =
        svg +
        `<line x1='${graphDimensions.marginLeft + xSpacing * i}' x2='${
          graphDimensions.marginLeft + xSpacing * i
        }' y1='${graphDimensions.marginTop}' y2='${
          graphDimensions.marginTop + graphDimensions.graphHeight()
        }'></line>`;
    }
  });

  svg = svg + "</g>";
  return svg;
};
