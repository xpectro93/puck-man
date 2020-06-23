import { createBoard, createGameObjectGrid, proto } from "./Level.js"
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
        this.start(speed);
        this.score = 0;
        this.ghosts;
    }
    start(speed) {
        let [grid, start, ghosts ] = createGameObjectGrid(this, proto);
        this.tiles = grid;
        this.puck_man = new PuckMan(this,speed, start);
        
        // debugger;
        // this.ghosts = ghosts;
        //adds event listener that executes function when button is pressed.
        new Input(this.puck_man)
        console.log('this game is starting ')
    }
    update(currentTime) {
        this.puck_man.update()
    }
    draw(ctx) {
        this.tiles.forEach(objRow => {
            objRow.forEach(obj => obj.draw(ctx));
        });
        this.puck_man.draw(ctx);
    //     this.ghosts.forEach(ghost=>{
    //         ghost.draw(ctx)});
    }
}
export default Game;


//its always colliding we can try to update puckman by checking if the update is valid;
//have to keep in mind that puckman is updated before the tiles;


//NOTE: for invalid moves look into when the event Input happens then check if this input
//will create a collision to wall then just cancel that input :)