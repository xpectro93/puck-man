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
        this.start(speed);
        this.score = 0;
        this.ghosts;
    }
    start(speed) {
        let [tiles, startPosition, ghosts ] = createBoard(this, proto);
        this.tiles = tiles;
        this.puck_man = new PuckMan(this,speed, startPosition);
        this.ghosts = ghosts;
        //adds event listener that executes function when button is pressed.
        new Input(this.puck_man)
        console.log('this game is starting ')
    }
    update(currentTime) {
        //puckman instance/ tile instance
        //GAME WIN
        if(this.tiles.every(tile=> tile.type !== "orb"))debugger
        let PM = {
            position: this.puck_man.getPossibleMove(),
            height: this.puck_man.height,
            width: this.puck_man.width};
            
            this.tiles.forEach(tile => {
                
                
                //Uses PM variable to check if the next move would hit the wall
                //if the next move hits wall, the direction is changed to 0;
                //then puck_man is updated accordingly
                //WALL COLLISION
                if(hasCollided(PM,tile) && tile.type === "wall") {
                    this.puck_man.direction = {x :0, y:0};
                    // debugger
                }
                if(hasCollided(PM,tile) && tile.type === "orb") {
                    this.score +=tile.value;
                    console.log(this.score);
                    tile.value = 0;
                    tile.type = "empty"
                    // debugger
                }
                // tile.update(ctx);
            })
            this.puck_man.update(currentTime);
            this.ghosts.forEach(ghost => ghost.update(this.tiles))
            console.log('update')
            // this.tiles = this.tiles.filter(tile => !tile.markedForDeletion);
           

        //update puck-man
        //update each tile
        
    }
    draw(ctx) {
        this.tiles.forEach(obj => obj.draw(ctx));
        this.puck_man.draw(ctx);
        this.ghosts.forEach(ghost=>{
            ghost.draw(ctx)});
    }
}
export default Game;


//its always colliding we can try to update puckman by checking if the update is valid;
//have to keep in mind that puckman is updated before the tiles;


//NOTE: for invalid moves look into when the event Input happens then check if this input
//will create a collision to wall then just cancel that input :)