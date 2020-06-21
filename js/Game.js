import { createBoard, proto } from "./Level.js"
class Game {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.walls = [];
        console.log(this)
        this.start()
    }
    start() {
        this.walls = createBoard(this, proto);
    }
    draw(ctx) {
        console.log('Game drawing')
        this.walls.forEach(obj => obj.draw(ctx));
        console.log(this.walls)
    }
}
export default Game;