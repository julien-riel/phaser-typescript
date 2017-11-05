import { splash } from './states/splash';
import { credits } from './states/credits';

// Initialize the game and start our state
export let game: Phaser.Game = new Phaser.Game(400, 450);  
game.state.add('splash', splash('end-credits'));  
game.state.add('end-credits', credits);  
game.state.start('splash');