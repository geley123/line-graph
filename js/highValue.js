import { channelData } from "./script.js";

export const getHighValue = function () {
  const highs = [];
  channelData.forEach(function (el) {
    highs.push(Math.max(...el.share));
  });
  const highValue = Math.max(...highs);
  console.log(highValue);
  return highValue;
};
