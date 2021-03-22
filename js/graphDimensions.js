export const graphDimensions = {
  svgWidth: 800,
  svgHeight: 500,
  marginTop: 50,
  marginRight: 50,
  marginBottom: 50,
  marginLeft: 50,
  graphWidth: function () {
    return this.svgWidth - (this.marginRight + this.marginLeft);
  },
  graphHeight: function () {
    return this.svgHeight - (this.marginTop + this.marginBottom);
  },
};
const gHeight = graphDimensions.graphHeight();
