import { createBoard, proto } from "./Level.js"
import PuckMan from './PuckMan.js';
import Input from "./Input.js";

import { hasCollided } from "./Collision.js";

class Game {
    constructor(gameWidth, gameHeight,speed) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.puck_man;
        this.tiles = [];
        console.log(this)
        this.start(speed)
    }
    start(speed) {
        let [tiles, startPosition ] = createBoard(this, proto);
        this.tiles = tiles;
        this.puck_man = new PuckMan(this,speed, startPosition);
        new Input(this.puck_man)
        console.log('this game is starting ')
    }
    update(ctx) {
        //puckman instance/ tile instance
        let PM = {position: this.puck_man.getPossibleMove(),
            height: this.puck_man.height,
            width: this.puck_man.width};
            this.tiles.forEach(tile => {
                
                if(hasCollided(PM,tile) && tile.type === "wall" ) {
                    this.puck_man.direction = {x :0, y:0};
                    // this.puck_man.position = 
                    console.log('has collided')
                }
                tile.update(ctx)
            })
            this.puck_man.update(ctx)

        //update puck-man
        //update each tile
        
    }
    draw(ctx) {
        this.puck_man.draw(ctx);
        this.tiles.forEach(obj => obj.draw(ctx));
    }
}
export default Game;


//its always colliding we can try to update puckman by checking if the update is valid;
//have to keep in mind that puckman is updated before the tiles;