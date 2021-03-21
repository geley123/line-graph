//y axis

import { graphDimensions } from "./script.js";
import { maxY } from "./script.js";

export const yAxisLine = function () {
  const svgGraph1 = `<line class="axis-line" x1=${
    graphDimensions.marginLeft
  } x2=${graphDimensions.marginLeft} y1=${graphDimensions.marginTop} y2=${
    graphDimensions.marginTop + graphDimensions.graphHeight()
  }></line>`;

  return svgGraph1;
};

const numYAxisLines = function () {
  let numYAxisLines = 5;
  if (maxY % 5 == 0) {
    numYAxisLines = 5;
  } else if (maxY % 4 == 0) {
    numYAxisLines = 4;
  } else if (maxY % 3 == 0) {
    numYAxisLines = 3;
  } else {
    numYAxisLines = 5;
  }
  return numYAxisLines;
};

export const yAxisValues = function () {
  const numLines = numYAxisLines();
  let svg = "<g class='labels '>";

  for (let n = numLines; n > 0; n--) {
    svg =
      svg +
      `<text class='y-labelsLeft' x=${graphDimensions.marginLeft - 5} y=${
        graphDimensions.marginTop +
        graphDimensions.graphHeight() -
        graphDimensions.graphHeight() * (n / numLines) +
        7
      } >${maxY * (n / numLines)}</text>`;
  }
  svg =
    svg +
    `<text class='y-labelsLeft' x=${graphDimensions.marginLeft - 5} y=${
      graphDimensions.marginTop + graphDimensions.graphHeight() + 3
    }>0</text></g>`;
  return svg;
};

export const horizontalLines = function () {
  const numLines = numYAxisLines();
  let svg = `<g class='grid'>`;
  for (let n = 0; n < numLines; n++) {
    console.log(n);
    svg =
      svg +
      `<line x1=${graphDimensions.marginLeft} 
      x2=${graphDimensions.marginLeft + graphDimensions.graphWidth()} 
      y1=${
        graphDimensions.marginTop +
        graphDimensions.graphHeight() * (n / numLines)
      }
      y2=${
        graphDimensions.marginTop +
        graphDimensions.graphHeight() * (n / numLines)
      }></line>`;
  }
  svg = svg + "</g>";
  return svg;
};
//(graph_y+(graph_height*(j/numYAxisLines)))
