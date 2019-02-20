function Generation(index, relChart) {
  this.index = index; // 0-based generation number
  this.relChart = relChart;

  this.genPersons = [];   // list of persons in this generation
  this.left = 0; // ldeft coordinate of person boxes in this generation

  this.getLeft = function() {
    return this.left;
  };

  this.getRight = function() {
    return this.left + this.relChart.generationWidth;
  };
}