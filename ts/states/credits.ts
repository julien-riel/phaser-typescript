 // Create the state that will contain the whole this.game
 class Credits extends Phaser.State {  
    
    
        constructor() {
            super();
        }
    
        preload() {  
        }
        
        create() {  
            // Set the background color to blue
            this.game.stage.backgroundColor = '#3598db';

            this.game.add.text(20, 20, "Thanks for playing");
        }
    
        update() { } 
    };
    
    export let credits = new Credits();