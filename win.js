var fondowin;
var winner;


var Win = {

	preload: function(){
		juego.load.image('fondowin','img/fondowin.png');
		juego.load.image('bgwin','img/win.png');
		

	},

	create: function() {

		fondowin = juego.add.tileSprite(0,0,290,540,'fondowin');
		winner = juego.add.sprite(juego.width/2,juego.height/2,'bgwin');
		winner.anchor.setTo(0.5);
		

	}
};