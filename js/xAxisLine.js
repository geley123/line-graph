//x axis

import { graphDimensions } from "./script.js";

export const xAxisLine = function () {
  const svgGraph1 = `<line class="axis-line" x1=${
    graphDimensions.marginLeft
  } x2=${graphDimensions.marginLeft + graphDimensions.graphWidth()} y1=${
    graphDimensions.marginTop + graphDimensions.graphHeight()
  } y2=${graphDimensions.marginTop + graphDimensions.graphHeight()}></line>`;

  return svgGraph1;
};
