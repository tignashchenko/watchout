// start slingin' some d3 here.
// GAME PARAMETERS:

var createAsteroids = function(numAsteroids) {

  return _.range(numAsteroids).map(function(e) {
    return { id: e,
      xPos: (Math.floor(Math.random() * boardWidth)),
      yPos: (Math.floor(Math.random() * boardHeight)),
    };
  });
};

var boardWidth = 1400;
var boardHeight = 800;
var numAsteroids = 16;

var asteroidArray = createAsteroids(numAsteroids);
console.log(asteroidArray);
// debugger;
var update = function(data) {
  var highScore = select('highScore')
    .data(data) // OUR SPECIFIC DATA
    .text(function(d) { return d; });

  var currentScore = selectAll('currentScore')
    .data(data)
    .text(function(d) { return d; });

  var collisions = selectAll('collisions')
    .data(data)
    .text(function(d) { return d; });
};

// INSTANTIATE SVG BOARD OBJECT

var playField = d3.select('.board')
    .append('svg')
    .attr('class', 'playField')
    .attr('height', boardHeight)
    .attr('width', boardWidth);

// INSTANTIATE SVG ASTEROID OBJECTS
  // DEFINE ASTEROID MOTION

// FUNCTION(DATA)
// FOR EACH ITEM IN DATA:
  // CALL THE 'ASTEROID' FUNCTION

var renderAsteroids = function(asteroidArray) {

  d3.select('.playfield')

  .selectAll('.asteroid')
  .data(asteroidArray)
  .enter().append('image')
  .attr('class', 'asteroid')
  .attr('xlink:href', './asteroid.png')
  .attr('x', 'xPos')
  .attr('y', 'yPos')
  .exit().remove();
};

// var asteroid = playField.append('image')
// //    .data(data)
//     .attr('class', 'asteroid')
//     .attr('xlink:href', './asteroid.png')
//     .attr('x', 'xPos')
//     .attr('y', 'yPos');


// INSTANTIATE SVG PLAYER OBJECT
var player = playField.append('image')
    .attr('class', 'player')
    .attr('xlink:href', 'resources/x-wing.png')
    .attr('opacity', 1.0)
    .attr('x', boardWidth * 0.5)
    .attr('y', boardHeight * 0.5);

  // SUPPORT PLAYER-OBJECT MOTION

// IMPLEMENT COLLISIONS

renderAsteroids(asteroidArray);


// ======================================================================= //
// =================         FUNCTIONS             ======================= //
// ======================================================================= //






























