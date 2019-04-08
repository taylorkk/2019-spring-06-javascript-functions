function randomColumnColor() {
  var column_colors = [
    '#FF355E',
    '#FD5B78',
    '#FF6037',
    '#FF9966',
    '#FF9933',
    '#FFCC33',
    '#FFFF66',
    '#FFFF66',
    '#CCFF00',
    '#66FF66',
    '#AAF0D1',
    '#50BFE6',
    '#FF6EFF',
    '#EE34D2',
    '#FF00CC',
    '#FF00CC'
  ];
  var i = Math.floor(Math.random() * column_colors.length);
  return column_colors[i];
}

function randomBodyColor() {
  var background_colors = [
    'black',
    'white',
    '#333'
  ];
  var i = Math.floor(Math.random() * background_colors.length);
  return background_colors[i];
}
