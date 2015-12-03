var HanoiView = require('./hanoi-view');//...require appropriate file
var HanoiGame = require('../../hanoi-core-solution/src/game');//...require appropriate file(look in /hanoi-core-solution)

$(function () {
  var rootEl = $('.hanoi');
  var game = new HanoiGame();
  new HanoiView(game, rootEl);
});
