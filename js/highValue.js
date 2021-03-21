import { channelData } from "./script.js";

export const getHighValue = function () {
  const highs = [];
  channelData.forEach(function (el, i) {
    if (channelData[i].alpha) {
      highs.push(Math.max(...el.share));
    }
  });
  const highValue = Math.max(...highs);

  return highValue;
};
