var gamerOver;
var Terminado = {
    
    preload: function(){
        juego.load.image('perdiste','img/gameover.png');
        juego.load.audio()
    },
    
    create: function(){
  		juego.stage.backgroundColor = "990000";
        gamerOver = juego.add.sprite(juego.width/2,270,'perdiste');
        juego.add.text(60,400,"!VUELVE A INTENTARLO! ",{font:"14px Arial",fill:"#FFF"});
        gamerOver.anchor.setTo(0.5);
    }
    
   
};