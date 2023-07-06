var fondo ;
var carro;
var cursores;
var enemigos;
var timer;
var carros;
var soundbg;
var soundchoque;
var soundpuntos;
var soundgameover;


var gasolinas;
var timerGasolina;

var puntos;
var txtPuntos;

var vidas;
var txtVidas;

var buttonplay;
var playing = false;


var Juego = {

	preload:function () {
	
		juego.load.image('bg','img/pista.png');
		juego.load.image('carro','img/car.png');
		juego.load.image('carroMalo','img/carenemy1.png');
		juego.load.image('gasolina','img/gasolina.png');
		juego.load.audio('musica','sounds/soundcarbg.mp3');
		juego.load.audio('choque','sounds/soundchoque.mp3')
		juego.load.audio('punto','sounds/soundpuntos.mp3');
		juego.load.audio('perdiste','sounds/soundsgameover.mp3');

		
		juego.forceSingleUpdate = true;


	},

	create:function(){
		fondo = juego.add.tileSprite(0,0,290,540,'bg');
		

		carro = juego.add.sprite(juego.width/2,496,'carro');
		carro.anchor.setTo(0.5);

		carros=juego.add.group();
		
		carros.enableBody=true;
		juego.physics.arcade.enable(carro,true);
		cursores=juego.input.keyboard.createCursorKeys();
		
		enemigos = juego.add.group();
		juego.physics.arcade.enable(enemigos,true);
		enemigos.enableBody = true;
		enemigos.createMultiple(20, 'carroMalo');
		enemigos.setAll('anchor.x',0.5);
		enemigos.setAll('anchor.y',0.5);
		enemigos.setAll('outOfBoundsKill',true);
		enemigos.setAll('checkWorldBounds',true);

		gasolinas = juego.add.group();
		juego.physics.arcade.enable(gasolinas,true);
		gasolinas.enableBody = true;
		gasolinas.createMultiple(20,'gasolina');
		gasolinas.setAll('anchor.x',0.5);
		gasolinas.setAll('anchor.y',0.5);
		gasolinas.setAll('outOfBoundsKill',true);
		gasolinas.setAll('checkWorldBounds',true);


		timer = juego.time.events.loop(1500, this.crearCarroMalo, this);
		timerGasolina = juego.time.events.loop(2000,this.crearGasolina,this);

		puntos=0;
		juego.add.text(20,20,"Puntos: ",{font:"14px Arial",fill: "#FFF"});
		txtPuntos=juego.add.text(80,20,"0",{font:"14px Arial",fill:"#FFF"});

		vidas=3;
		juego.add.text(220,20,"Vidas: ",{font:"14px Arial",fill:"#FFF"});
		txtVidas = juego.add.text(270,20,"3",{font:"14px Arial",fill:"#FFF"});

		soundcarbg = juego.sound.add("musica");
		soundcarbg.loop = true;
		soundcarbg.play();

		soundchoque = juego.sound.add("choque");
		soundchoque.loop = false;

		soundpuntos = juego.sound.add("punto");
		soundpuntos.loop = false;

		soundgameover = juego.sound.add("perdiste");
		soundgameover.loop = false;

	},

	update:function(){

		juego.physics.arcade.overlap(carro,gasolinas,colision1,null,this);
		juego.physics.arcade.overlap(carro,enemigos,colision,null,this);


		if(vidas == 0){
			juego.state.start("Terminado");
			soundcarbg.stop();
			soundgameover.play();
	
		}

		

		// if(puntos == 2){
		// 		juego.state.start("Win");
		// 	}
		

			fondo.tilePosition.y += 3;

			if(cursores.right.isDown && carro.position.x<245)
			{
			carro.position.x +=5;

			}
			else if (cursores.left.isDown && carro.position.x>45)
			{
			carro.position.x -=5;
			}


			if(puntos == 3){
			juego.state.start("Juego2");
		}


	},


	crearCarroMalo: function(){
		var posicion = Math.floor(Math.random()*3)+1;
		var enemigo = enemigos.getFirstDead();
		enemigo.physicsBodyType = Phaser.Physics.ARCADE;
		enemigo.reset(posicion*73,0);
		enemigo.body.velocity.y = 200;
		enemigo.anchor.setTo(0.5);
		
	},
	crearGasolina: function(){
		var posicion = Math.floor(Math.random()*3)+1;
		var gasolina = gasolinas.getFirstDead();
		gasolina.physicsBodyType = Phaser.Physics.ARCADE;
		gasolina.reset(posicion*73,0);
		gasolina.body.velocity.y = 200;
		gasolina.anchor.setTo(0.5);
		
	}
};

/*function startGame(){
	buttonplay.destroy();
	juego.physics.arcade.enable(carro,true);
	juego.physics.arcade.enable(enemigos,true);
	juego.physics.arcade.enable(gasolinas,true);
	timer = juego.time.events.loop(1500, this.crearCarroMalo, this);
	timerGasolina = juego.time.events.loop(2000,this.crearGasolina,this);
	fondo = juego.add.tileSprite(0,0,290,540,'bg');
	playing=true;}*/




function colision(carro,enemigo){
	soundchoque.play();
	enemigo.kill();
	vidas--;
	txtVidas.text = vidas;	
	
}
function colision1(carro,gasolina){
	soundpuntos.play();
	gasolina.kill();
	puntos++;
	txtPuntos.text = puntos;
		
}