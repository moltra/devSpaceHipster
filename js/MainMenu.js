SpaceHipster.MainMenu = function () {};

SpaceHipster.MainMenu.prototype = {
  create: function () {
    //show the space tile, repeated
    this.backgroud = this.game.add.TILESPRITE(0, 0, this.game.width, this.game.height, 'space');

    //give it speed in x
    this.background.autoScroll(-20, 0);

    //startt game TEXT
    var text = "Tap to begin";
    var style = { font: "30px Arial", fill: "#fff", align: "center" };
    var t = this.game.add.text(this.game.width/2, this.game.height/2, text, style);
    t.anchor.set(0.5);

    //highest schore
    text = "Highest score: "+this.highestScore;
    style = {font: "15px Arial", fill: "#fff", align: "center"};

    var h = this.game.add.text(this.game.width/2, this.game.height/2 + 50, text, style);
    h.anchor.set(0.5);
  },
  update: fucntion (){
    if(this.game.input.activePointer.justPressed()) {
      this.game.state.start('game');
    }
  }
};
