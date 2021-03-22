import { graphDimensions } from "./script.js";
import { channelData } from "./script.js";
import { maxY } from "./script.js";
import { xAxisValues } from "./script.js";

export const drawDataLines = function () {
  const numXaxisLines = xAxisValues.length; //to be calculated
  const ySpacing = graphDimensions.graphHeight() / maxY;
  const xSpacing = graphDimensions.graphWidth() / (numXaxisLines - 1);
  let svg = `<g class='lines '>`;
  channelData.forEach((_, i) => {
    if (channelData[i].alpha) {
      svg =
        svg +
        `<polyline class='line' fill-opacity='0'  stroke='${channelData[i].color}' points='     `;

      channelData[i].share.forEach((element, j) => {
        svg =
          svg +
          `${graphDimensions.marginLeft + xSpacing * j},${
            graphDimensions.marginTop +
            graphDimensions.graphHeight() -
            element * ySpacing
          },`;
      });
      svg = svg.slice(0, -1);
      svg = svg + "'/>";
    }
  });

  svg = svg + "</g>";
  return svg;
};
