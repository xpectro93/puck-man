import { createBoard, proto } from "./Level.js"
import PuckMan from './PuckMan.js';
import Input from "./Input.js"
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
    update() {
        this.puck_man.update()
    }
    draw(ctx) {
        this.tiles.forEach(obj => obj.draw(ctx));
        this.puck_man.draw(ctx);
    }
}
export default Game;