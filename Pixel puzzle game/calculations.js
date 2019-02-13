///Cells
//Sets up and initiates the puzzle cells
function precalcCells(puzzle) {
  for(var width = 0; width < puzzle.width; width++){
    for(var height = 0; height < puzzle.height; height++){
      var index = width + height*puzzle.width
      puzzle.cells[index].width = cellWidth
      puzzle.cells[index].x = puzzleBorder + width  * cellWidth
      puzzle.cells[index].y = puzzleBorder + height * cellWidth
      puzzle.cells[index].active = round(random())
    }
  }
}

//Recalculates position and shape of the cells
function recalcCells(puzzle) {
  for(var w = 0; w < puzzle.width; w++){
    for(var h = 0; h < puzzle.height; h++){
      var index = w + h*puzzle.width
      puzzle.cells[index].width = cellWidth
      puzzle.cells[index].x = puzzleBorder + w  * cellWidth
      puzzle.cells[index].y = puzzleBorder + h * cellWidth
    }
  }
}

///Linear Counter Arrays
//Sets up and initiates the horizontal and vertical linear counting arrays
function setupLinearCountArray(puzzle) {
  var w = puzzle.width, h = puzzle.height
  //setup vertical linear counting arrays
  for(var i = 0; i < w; i++) {
    puzzle.verticalLinearCounters[i] = new LinearCountArray
    puzzle.verticalLinearCounters[i].values = []
  }
  //setup horizontal linear counting arrays
  for(var j = 0; j < h; j++) {
    puzzle.horizonalLinearCounters[j] = new LinearCountArray
    puzzle.horizonalLinearCounters[j].values = []
  }
}

//Recalculates the values of the horizontal and vertical linear counting arrays
function recalcLinearCountArray(puzzle) {
  var vertCount = 0;
  var horCount = 0;
  var vertCountArray = []
  var w = puzzle.width
  var h = puzzle.height

  //vertical calc
  for(var i = 0; i < w; i++) {
    var vertLinCount = puzzle.verticalLinearCounters[i]
    vertCount = 0
    vertLinCount.values = []
    vertLinCount.values[vertCount] = 0

    for(var j = 0; j < h; j++) {
      if(puzzle.cells[i+j*w].active == true) {
        vertLinCount.values[vertCount] ++
      }
      else if(!puzzle.cells[i+j*w].active && vertLinCount.values[vertCount] != 0) {
        vertCount ++
        vertLinCount.values[vertCount] = 0;
      }
    }
    if(vertLinCount.values.length > 1 & vertLinCount.values[vertLinCount.values.length-1]==0) {
      vertLinCount.values.splice(vertLinCount.values.length - 1, 1)
    }
  }
  //horizonal calc
  for(var i = 0; i < h; i++) {
    var horLinCount = puzzle.horizonalLinearCounters[i]
    horCount = 0
    horLinCount.values = []
    horLinCount.values[horCount] = 0

    for(var j = 0; j < w; j++) {
      if(puzzle.cells[i*w+j].active == true) {
        horLinCount.values[horCount] ++
      }
      else if(!puzzle.cells[i*w+j].active && horLinCount.values[horCount] != 0) {
        horCount ++
        horLinCount.values[horCount] = 0;
      }
    }
    if(horLinCount.values.length > 1 & horLinCount.values[horLinCount.values.length-1]==0) {
      horLinCount.values.splice(horLinCount.values.length - 1, 1)
    }
  }
}

/*///ValueContainers
//Sets up and initiates linear counting array value containers
function setupValueContainers(puzzle) {

}
//Recalculates the value and position of the linear counting array value containers
function recalcValueContainers(puzzle) {
  var w = puzzle.width
  var h = puzzle.height

  for(var i = 0; i < w; i++) {
    var length = puzzle.verticalLinearCounters.length
    var vertLinCount = puzzle.verticalLinearCounters[i].values
    for(var vl = 0; vl < length; vl++) {
      rect(x, y, w, h)
      text(vertLinCount, puzzle.cells[i].x + cellWidth / 2,  10 * j + 16)
    }
  }

  for(var j = 0; j < h; j++) {
    var length = puzzle.horizonalLinearCounters[j].length
    for(var hl = 0; hl < length; hl++) {
      rect(x, y, w, h)
    }
  }
}
*/
