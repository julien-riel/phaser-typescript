 // Create the state that will contain the whole this.game
 class Splash extends Phaser.State {  

    private left: Phaser.Key;
    private right: Phaser.Key;
    private enter: Phaser.Key;
    private logo: Phaser.Sprite;
    
    constructor(private nextState: string) {
        super();
    }

    preload() {  
        this.game.load.image('logo', 'assets/phaser.png'); 
    }
    
    create() {  
        // Set the background color to blue
        this.game.stage.backgroundColor = '#3598db';

        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        // Add the physics engine to all the this.game objetcs
        this.game.world.enableBody = true;

        // Create the left/right arrow keys
        this.left = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        this.right = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        this.enter = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
        
        // Add the paddle at the bottom of the screen
        this.logo = this.game.add.sprite(20, 20, 'logo');

        // Make sure the logo won't move
        this.logo.body.immovable = true;
    }

    update() {  
        // Move the paddle left/right when an arrow key is pressed
        if (this.left.isDown) this.logo.body.velocity.x = -300;
        else if (this.right.isDown) this.logo.body.velocity.x = 300; 
        else if (this.enter.isDown) this.game.state.start(this.nextState); 

        // Stop the paddle when no key is pressed
        else this.logo.body.velocity.x = 0;  
    }
    
};

export let splash = (nextState: string) => {
    return new Splash(nextState);
}