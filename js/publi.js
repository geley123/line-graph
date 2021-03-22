import { graphDimensions } from "./script.js";
import { channelData } from "./script.js";
import { maxY } from "./script.js";
import { xAxisValues } from "./script.js";

export const drawPubliSquares = function () {
  const numXaxisLines = xAxisValues.length; //to be calculated
  const ySpacing = graphDimensions.graphHeight() / maxY;
  const xSpacing = graphDimensions.graphWidth() / numXaxisLines;
  let svg = `<g class='lines '>`;
  channelData.forEach((_, i) => {
    if (channelData[i].alpha) {
      channelData[i].publi.forEach((el, j) => {
        if (el === "S") {
          svg =
            svg +
            `<rect  class='publiSqr' x='${
              graphDimensions.marginLeft + xSpacing * j - 1
            }' y='${
              graphDimensions.marginTop +
              graphDimensions.graphHeight() -
              channelData[i].share[j] * ySpacing -
              1
            }' width='3' height='3' style='fill:${channelData[i].color}'/>`;
        }
      });
    }
  });
  svg = svg + "</g>";
  return svg;
};

// svgGraph=svgGraph+="<rect  class='publiSqr'   x="+(graph_x+(barWidth/2)+(horizontalSpacing*c))+" y="+(graph_y + graph_height-(valoresArr[b][c]*ySpacingFactor))+" width='3' height='3' style='fill:"+coloresArr[b]+";  fill-opacity:"+alpha[m]+"; stroke-width:0; stroke:rgb(255,255,255);'/>"
