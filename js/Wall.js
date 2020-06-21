class Wall {
    constructor(gameInstance, position) {
        this.game = gameInstance;
        this.position = position;
        console.log('this is wall,',this)
        this.width = this.game.gameWidth / 28;
        this.height = this.game.gameHeight / 31;

        this.hasCollision = true;
    }
    update() {
    }

    draw (ctx) {
        ctx.fillStyle = `rgba(0, 0, 200)`;
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}
export default Wall;