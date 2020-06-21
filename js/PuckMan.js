class PuckMan {
    constructor(gameInstance,speed, startPosition) {
        this.width = gameInstance.gameWidth/28;
        this.height = gameInstance.gameHeight/31;

        this.direction = {
            x :0,
            y: 0
        }

        this.speed = speed;

        this.position ={
            x : startPosition[0],
            y : startPosition[1]
        }
    }
    draw(ctx) {
        ctx.fillStyle ="Yellow";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}
export default PuckMan;