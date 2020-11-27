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
        this.puckMan.puckCollide(this.level.board);
        this.puckMan.update();
    }
}
export default Game;