

var juego = new Phaser.Game(290, 540, Phaser.CANVAS, 'runner');

juego.state.add('Menu',Menu);
juego.state.add('Juego',Juego);
juego.state.add('Win',Win);
juego.state.add('Juego2',Juego2);
juego.state.add('Juego3',Juego3);
juego.state.add('Terminado',Terminado);
juego.state.start('Menu');


