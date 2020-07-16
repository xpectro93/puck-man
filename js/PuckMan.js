import { hasCollided } from './Collision.js'
class PuckMan {
    constructor(gameInstance,speed, startPosition) {
        this.width = gameInstance.gameWidth/28;
        this.height = gameInstance.gameHeight/31;

        this.direction = {
            x :0,
            y: 0
        }

        this.speed = speed;

        this.position = startPosition;
        this.lastAttempt = {x: 0,y:0};
    }
    moveLeft(tiles) {
        let PM = this.getPossibleMove({x:-1,y:0})
        let posTile = tiles[PM.y][PM.x]

        //If the move leads to a wall, this input is cancelled
        if(hasCollided(PM,posTile) && posTile.type === "wall") return;
        this.direction =  {
            x: -1, y : 0
        }
        
    };
    
    moveRight(tiles) {
        let PM = this.getPossibleMove({x:1,y:0})
        let posTile = tiles[PM.y][PM.x]
        if(hasCollided(PM,posTile) && posTile.type === "wall") return;
        this.direction =  {
            x: 1, y : 0
        }
    }

    moveUp(tiles) {
        let PM = this.getPossibleMove({x:0,y:-1})
        let posTile = tiles[PM.y][PM.x]
        if(hasCollided(PM,posTile) && posTile.type === "wall") return;
        this.direction = {
            x:0, y:-1
        }
    }

    moveDown(tiles) {
        let PM = this.getPossibleMove({x:0,y:1})
        let posTile = tiles[PM.y][PM.x]
        if(hasCollided(PM,posTile) && posTile.type === "wall") return;
        this.direction = {
            x:0, y: 1
        }
    }
    getPossibleMove(dir = this.direction) {
        return { x: this.position.x + dir.x,
                  y: this.position.y + dir.y}
       
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

// getDistance (a,b) {
//     return Math.hypot(b.x - a.x, b.y - a.y);
// }