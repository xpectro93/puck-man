class PuckMan {
    constructor(gameInstance,speed, startPosition) {
        this.width = gameInstance.gameWidth/28;
        this.height = gameInstance.gameHeight/31;

        this.direction = {
            x :0,
            y: 0
        }

        this.speed = speed;

        this.position = startPosition
    }
    moveLeft() {
        this.direction =  {
            x: -this.width, y : 0
        }
    };
    
    moveRight() {
        this.direction =  {
            x: this.width, y : 0
        }
    }

    moveUp() {
        this.direction = {
            x:0, y:-this.height
        }
    }

    moveDown() {
        this.direction = {
            x:0, y: this.height
        }
    }
    getPossibleMove() {
        return { x : this.position.x + this.direction.x,
                  y: this.position.y + this.direction.y}
       
    }
    draw(ctx) {
        let posX = this.position.x * this.width;
        let posY = this.position.y * this.height;
        ctx.fillStyle ="Yellow";
        ctx.fillRect(posX, posY, this.width, this.height);
    }

    update() {
        //collision should be in the view of what the object is going to touch
        this.position.x += this.direction.x;
        this.position.y += this.direction.y;
    }
}
export default PuckMan;