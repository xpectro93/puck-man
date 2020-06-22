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
    moveLeft() {
        this.direction =  {
            x: -1, y : 0
        }
    };
    
    moveRight() {
        this.direction =  {
            x: 1, y : 0
        }
    }

    moveUp() {
        this.direction = {
            x:0, y:-1
        }
    }

    moveDown() {
        this.direction = {
            x:0, y: 1
        }
    }
    draw(ctx) {
        ctx.fillStyle ="Yellow";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update() {
        console.log(this.position,"direction")
        this.position.x += this.direction.x;
        this.position.y += this.direction.y;
    }
}
export default PuckMan;