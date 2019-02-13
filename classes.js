class Cell {
  //The actual visual game cells the puzzle grid consists out of
  constructor() {
    this.x = 0
    this.y = 0
    this.width = 0
    this.horAlignment = 0
    this.vertAlignment = 0
    this.active = false
  }
}

class ValueContainer {
  constructor() {
    this.x = 0
    this.y = 0
    this.value = 0
  }
}

class LinearCountArray {
  //The linear counting arrays to visualize the horizontal
  //and vertical linear values of the puzzle
  constructor() {
    this.values = []
  }
}

class Puzzle {
  //The actual puzzle object which is used to visualize and solve the puzzles
  constructor() {
    this.width = 0
    this.height = 0
    this.cells = [] //this holds the Cell class objects
    this.horizonalLinearCounters = [] //this holds the LinearCountArray objects
    this.verticalLinearCounters = [] //this holds the LinearCountArray objects
  }
}

class PuzzleSolution {
  //A similar puzzle object as the Puzzle class, which will hold the solution
  constructor() {
    this.width = 0
    this.height = 0
    this.cells = []
    this.horizonalLinearCounters = []
    this.verticalLinearCounters = []
  }
}
