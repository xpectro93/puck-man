import PuckMan from "./PuckMan.js";
import Level from "./Level.js";
import Input from "../js/Input.js";
//game shouldd be in charge of rules
class Game {
    constructor( gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.puckMan;
        this.level = new Level(gameWidth /28, gameHeight/31);

        this.score = 0;
        this.start();

    } 

    start() {
        this.puckMan = new PuckMan(13,23,this.gameWidth/28, this.gameHeight/31)
        this.puckMan.type = "puck";

        // debugger
        this.level.board[this.puckMan.y][this.puckMan.x] = this.puckMan;
        new Input(this.puckMan, this.level.board);
    }
    draw( ctx ) {
        this.level.draw(ctx);
    }
    update() {
        console.log('this is still happening');
        // debugger
        // console.log(this.puckMan,this.level.board[this.puckMan.y][this.puckMan.x]);
        let to = this.puckMan.update(this.level.board);
        let from = [this.puckMan.x, this.puckMan.y];
        this.level.update(from, to, this.puckMan);
    }
}
export default Game;

/**
 * We can get each update method to take in gameTime
 * this would allow us to update each Tile at different rates
 * since puckman would be faster during his pellet power up mode
 */