import { graphDimensions } from "./script.js";
import { channelData } from "./script.js";
import { maxY } from "./script.js";

export const drawDataLines = function () {
  const numXaxisLines = 189; //to be calculated
  const ySpacing = graphDimensions.graphHeight() / maxY;
  const xSpacing = graphDimensions.graphWidth() / numXaxisLines;
  let svg = `<g class='lines '>`;
  channelData.forEach((_, i) => {
    console.log("loop" + i);
    svg =
      svg +
      `<polyline class='line' fill-opacity='0'  stroke='${channelData[i].color}' points='     `;
    console.log(channelData[i].share);
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
  });

  svg = svg + "</g>";
  return svg;
};
