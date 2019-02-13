//draws out the border and right shape of the cells
function drawCells(puzzle) {
  for(var i = 0; i < puzzle.width * puzzle.height; i++) {
    noFill(0)
    var shape = 0//round(random(0,4))
    var cell = puzzle.cells[i]
    cell.width = cellWidth
    var x = cell.x
    var y = cell.y
    var w = cell.width
    var b = border

    fill(255)
    rect(x, y, w, w)
    noFill()
    var x1 = x + b * 1.25
    var x2 = x + w - b * .75
    var y1 = y + b * 1.25
    var y2 = y + w - b * .75

    if(cell.active) {
      fill(0)
      switch (shape) {
        case 0:
          rect(x+border, y+border, w-border*2, w-border*2)
          break;
        case 1:
          triangle(x1, y1, x2, y1, x1, y2)
          break;
        case 2:
          triangle(x1, y1, x2, y1, x2, y2)
          break;
        case 3:
          triangle(x1, y1, x1, y2, x2, y2)
          break;
        case 4:
          triangle(x2, y1, x1, y2, x2, y2)
          break;
        default:
          break;
      }
    }
  }
}

//draws out the values of the horizonal and vertical linear counting arrays
function drawValues(puzzle) {
  fill(0)
  stroke(0)
  strokeWeight(.5)
  for(var i = 0; i < puzzle.height; i++) {
    for(var j = 0; j < puzzle.horizonalLinearCounters[i].values.length; j++) {
      var horLinCount = puzzle.horizonalLinearCounters[i].values[j]
      var x = 16 + 16 * j
      var y = puzzle.cells[1 + i * puzzle.width].y + cellWidth / 2
      strokeWeight(1)
      fill(255)
      rect(x - 8, y - 8, 16, 16)
      strokeWeight(.5)
      fill(0)
      textAlign(CENTER, CENTER)
      text(horLinCount, x, y)
      noFill()
    }
    //draws the colour indicator bars on the horizontal line
    strokeWeight(1)
    fill(255, 0, 0)
    rect(
      puzzle.cells[i * puzzle.width].x-6,
      puzzle.cells[i * puzzle.width].y,
      6,
      cellWidth)
    noFill()
    strokeWeight(.5)
  }

  for(var i = 0; i < puzzle.width; i++) {
    for(var j = 0; j < puzzle.verticalLinearCounters[i].values.length; j++) {
      var vertLinCount = puzzle.verticalLinearCounters[i].values[j]
      var x = puzzle.cells[i].x + cellWidth / 2
      var y = 16 + 16 * j
      fill(255)
      strokeWeight(1)
      rect(x - 8, y - 8, 16, 16)
      fill(0)
      strokeWeight(.5)
      textAlign(CENTER, CENTER)
      text(vertLinCount, x, y)
      noFill()
    }
    //draws the colour indicator bars on the vertical line
    strokeWeight(1)
    fill(0, 255, 0)
    rect(
      puzzle.cells[i].x,
      puzzle.cells[i].y-6,
      cellWidth,
      6)
    noFill()
    strokeWeight(.5)
  }
  strokeWeight(1)
}

function drawPreview(puzzle) {
  rect()
}

function canvasFitPuzzle(puzzle) {
  x = puzzle.cells[puzzle.width-1].x+cellWidth+8
  y = puzzle.cells[puzzle.cells.length-1].y+cellWidth+8
  resizeCanvas(x,y)
}
