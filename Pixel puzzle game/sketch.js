var activePuzzle
var cellWidth = 32
var puzzleBorder = 64
var border
var mouseClickActive = false
var activateCell = false
var refreshCanvas = 6
var refreshRate = 0

function setup() {
  createCanvas(640, 480)
  frameRate(30)
  activePuzzle = new Puzzle
  var puzzle = activePuzzle
  puzzle.width = 10
  puzzle.height = 10
  border = min(4, round(cellWidth * 0.125))
  //create cells
  for(var i = 0; i < puzzle.width*puzzle.height; i++) {
    puzzle.cells[puzzle.cells.length] = new Cell
  }
  // set cell values
  precalcCells(puzzle)
  setupLinearCountArray(puzzle)
}

function draw() {
  refreshRate ++
  background(224)
  puzzleBorder = max(96, ceil(max(activePuzzle.width, activePuzzle.height)/2) * 16 + 16)
  border = min(4, round(cellWidth * 0.125))
  cellActivation()
  recalcCells(activePuzzle)
  recalcLinearCountArray(activePuzzle)
  drawCells(activePuzzle)
  drawValues(activePuzzle)

  if(refreshRate > refreshCanvas) {
    refreshRate -= refreshCanvas
    canvasFitPuzzle(activePuzzle)
  }
}

/*function mouseClicked() {
  var puzzleW = activePuzzle.width
  var puzzleH = activePuzzle.height
  for(var i = 0; i < puzzleW*puzzleH; i++) {
    var cell = activePuzzle.cells[i]

    var x = cell.x
    var y = cell.y
    var w = cell.width

    if(mouseX >= x && mouseX < x+w){
      if(mouseY >= y && mouseY < y+w){
        cell.active = !cell.active
      }
    }
  }
}
*/

function mousePressed(event) {
  if(event.button == 0) {
    mouseClickActive = true

    var puzzleW = activePuzzle.width
    var puzzleH = activePuzzle.height
    for(var i = 0; i < puzzleW*puzzleH; i++) {
      var cell = activePuzzle.cells[i]

      var x = cell.x
      var y = cell.y
      var w = cell.width

      if(mouseX >= x && mouseX < x+w){
        if(mouseY >= y && mouseY < y+w){
          setCellActive = !activePuzzle.cells[i].active
        }
      }
    }
  }
}



function mouseReleased(event) {
  mouseClickActive = false
}

function cellActivation() {
  if(mouseClickActive) {
    var puzzleW = activePuzzle.width
    var puzzleH = activePuzzle.height
    for(var i = 0; i < puzzleW*puzzleH; i++) {
      var cell = activePuzzle.cells[i]

      var x = cell.x
      var y = cell.y
      var w = cell.width

      if(mouseX >= x && mouseX < x+w){
        if(mouseY >= y && mouseY < y+w){
          cell.active = setCellActive
        }
      }
    }
    fill(0,255,0)
    rect(4,4,24,24)
  }
  else {
    fill(255,0,0)
    rect(4,4,24,24)
  }
}
