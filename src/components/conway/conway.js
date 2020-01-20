const ROW_COUNT = 100;
const COLUMN_COUNT = 150;
const CELL_SIZE = 5;
const CELL_BORDER_SIZE = 1;
const BORDER_COLOR = '#bcd9e0';
const CELL_SIZE_WITH_BORDER = CELL_SIZE + CELL_BORDER_SIZE;

function ConwayJs(canvasId, options = {}) {
  this.canvas = document.getElementById(canvasId);
  this.rowCount = options.rowCount || ROW_COUNT;
  this.columnCount = options.columnCount || COLUMN_COUNT;
  this.state = this.getInitialState(true);
  this.width = this.columnCount * (CELL_SIZE + CELL_BORDER_SIZE);
  this.height = this.rowCount * (CELL_SIZE + CELL_BORDER_SIZE);
}

ConwayJs.prototype.init = function () {
  this.paintBackground();
  this.render();
}

ConwayJs.prototype.paintBackground = function () {
  const ctx = this.canvas.getContext('2d');

  ctx.fillStyle = BORDER_COLOR;
  ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
}

ConwayJs.prototype.getInitialState = function (randomize = true) {
  return {
    grid: Array.from({ length: this.rowCount }).map((_, i) => (
      Array.from({ length: this.columnCount }).map((_, j) => ({ i, j, alive: Math.random() < (randomize ? this.currentRandomizationValue() : 0) }))
    )),
    running: false,
    mouseDown: false,
    generations: 0,
  };
}

ConwayJs.prototype.currentRandomizationValue = function () {
  return document.getElementById('randomizer-number').value / 100;
}

ConwayJs.prototype.handleMousedown = function (event) {
  this.state.mouseDown = true;
  this.handleMousemove(event);
}

ConwayJs.prototype.handleMouseup = function () {
  this.state.mouseDown = false;
}

ConwayJs.prototype.handleMousemove = function (event) {
  if (this.state.mouseDown) {
    const cells = this.cellsFromMouseEvent(event);
    cells.forEach((cell) => {
      cell.alive = true;
      this.paintCell(cell.i, cell.j, cell.alive);
    });
  }
}

ConwayJs.prototype.cellsFromMouseEvent = function (event) {
  const column = Math.floor(event.nativeEvent.offsetX / CELL_SIZE_WITH_BORDER);
  const row = Math.floor(event.nativeEvent.offsetY / CELL_SIZE_WITH_BORDER);

  return [
    this.getCell(row, column),
    this.getCell(row + 1, column),
    this.getCell(row + 1, column + 1),
    this.getCell(row, column + 1)
  ];
}

ConwayJs.prototype.startRun = function () {
  this.state.running = true;
  this.state.startTime = Date.now();
}

ConwayJs.prototype.stopRun = function () {
  this.state.running = false;
}

ConwayJs.prototype.reset = function () {
  const randomize = document.getElementById('randomize').checked;
  this.state = this.getInitialState(randomize);
}

ConwayJs.prototype.render = function () {
  if (this.state.running) {
    this.tick();
    this.state.generations += 1;
  }

  this.paintGrid();

  return requestAnimationFrame(() => this.render());
}

ConwayJs.prototype.paintGrid = function () {
  this.state.grid.forEach(row => (
    row.forEach((cell) => this.paintCell(cell.i, cell.j, cell.alive))
  ));
}

ConwayJs.prototype.paintCell = function (i, j, alive) {
  const ctx = this.canvas.getContext('2d');

  ctx.fillStyle = alive ? 'black' : 'white';
  ctx.fillRect(j * CELL_SIZE_WITH_BORDER, i * CELL_SIZE_WITH_BORDER, CELL_SIZE, CELL_SIZE);
}

ConwayJs.prototype.tick = function () {
  this.state.grid.forEach((row, rowIndex) => {
    row.forEach((cell, columnIndex) => {
      const liveNeighbors = this.liveNeighborCount(rowIndex, columnIndex);
      cell.newAlive = cell.alive ? [2, 3].includes(liveNeighbors)
                                 : liveNeighbors === 3;
    });
  });

  this.state.grid.forEach((row) => {
    row.forEach((cell) => {
      if (cell.newAlive !== cell.alive) {
        cell.alive = cell.newAlive;
      }
      cell.newAlive = undefined;
    });
  });
}

ConwayJs.prototype.getCell = function (i, j) {
  const row = this.loopedIndex(i, this.state.grid.length)
  const column = this.loopedIndex(j, this.state.grid[row].length)

  return this.state.grid[row][column];
};

ConwayJs.prototype.loopedIndex = function (index, length) {
  if (index < 0) return index + length;
  if (index >= length) return index - length;
  return index;
}

ConwayJs.prototype.liveNeighborCount = function (i, j) {
  const neighbors = [
    this.getCell(i - 1, j - 1),
    this.getCell(i - 1, j),
    this.getCell(i - 1, j + 1),
    this.getCell(i, j - 1),
    this.getCell(i, j + 1),
    this.getCell(i + 1, j - 1),
    this.getCell(i + 1, j),
    this.getCell(i + 1, j + 1),
  ];
  return neighbors.filter(c => c && c.alive).length;
}

export default ConwayJs;
