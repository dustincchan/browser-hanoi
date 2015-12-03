var View = function (game, $el) {
  this.$el = $el;
  this.game = game;
  this.setupTowers();
};

View.prototype.bindEvents = function () {
  this.$el.on('click', 'li', function (event) {
    var $startTower = $(event.currentTarget);
    var $endTower = $(event.currentTarget);
    this.makeMove($startTower, $endTower);
  }).bind(this);
};

View.prototype.makeMove = function (startTower, endTower) {

};

View.prototype.setupTowers = function () {
  for (var i = 0; i < 3; i++) {
    var $ul = $("<ul></ul>").data('id', i + 1);
    for (var k = 1; k < 4; k++) {
      var $li = $("<li></li>");
      if (i === 0) {
        $li.addClass("disk-" + k);
      }
      $ul.append($li);
    }
    this.$el.append($ul);
  }

};

View.prototype.render = function () {
  var $topDisk = $("li:first-child")
};

module.exports = View;
