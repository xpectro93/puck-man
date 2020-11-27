import PuckMan from "./PuckMan.js";
import Level from "./Level.js";
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
        console.log(this.puckMan)
        // debugger
        this.level.board[this.puckMan.y][this.puckMan.x] = this.puckMan;
    }
    draw( ctx ) {
        this.level.draw(ctx);
    }
    update() {
        //check pieces
        //update if certain conditions happen
        //here should be all other pieces update calls being done
        //the board class can move pieces on but its up to the pieces to say if they can or cannot move 
    }
}
export default Game;