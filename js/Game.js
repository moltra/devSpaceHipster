var SpaceHipster = SpaceHipster ||{};

//title screen
SpaceHipster.Game = function () {};

SpaceHipster.Game.prototype = {
  create: function() {

    //set world dimensions
    this.game.world.setBounds(0, 0, 1920, 1920);
    this.background=this.game.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, 'space');

    //create player
    
  },
  update: function() {
  },
};
