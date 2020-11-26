import Level from "./Level.js";

class Game {
    constructor( gameWidth, gameHeight, speed ) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.puck_man;
        this.level = new Level();

        this.score = 0;
    } 
    draw( ctx ) {
        this.level.board.draw(ctx)
    }
}
export default Game;