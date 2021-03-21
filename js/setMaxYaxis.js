export const setMaxYaxis = function (highValue) {
  let maxYValue = 0;
  for (let i = -10; i < 10; i++) {
    if (highValue < Math.pow(10, i)) {
      maxYValue = highValue * Math.pow(10, 1 - i);
      maxYValue = Math.ceil(maxYValue);
      maxYValue = maxYValue * Math.pow(10, i - 1);
      break;
    }
  }

  return maxYValue;
};
