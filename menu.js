var portada;
var boton;
var Menu = {

	preload: function(){
		juego.load.image('bgportada','img/portada.png');
		juego.load.spritesheet('button','img/buttonplay.png',120,40);
	},

	create: function(){
		portada = juego.add.tileSprite(0,0,290,540,'bgportada');
		boton = juego.add.button(juego.width/2,juego.height/2+180,'button',this.iniciarJuego,1,0,2);
		boton.anchor.setTo(0.5);

		var txtIniciar = juego.add.text(juego.width/2, juego.height/2 +250, "Sebastian Gamarra", {font: "bold 10px sans-serif", fill:"red", align:"center"});
        txtIniciar.anchor.setTo(0.5);
        var txtTitulo = juego.add.text(juego.width/2, juego.height/2 -210, "", {font: "bold 30px sans-serif", fill:"white", align:"center"});
        txtTitulo.anchor.setTo(0.5);



	},

	iniciarJuego: function(){
		
		juego.state.start('Juego');
	}


};