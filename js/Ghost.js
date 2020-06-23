
import { hasCollided } from "./Collision.js";
class Ghost {
    constructor(gameInstance, speed, startPosition,type) {
        this.width = gameInstance.gameWidth /28;
        this.height = gameInstance.gameHeight / 31;

        this.direction = {
            x :0,
            y: 0
        }
        this.speed = speed;
        this.position ={
            x : startPosition[0],
            y : startPosition[1]
        }
        this.type = type
    }
    getMove(direction){
        let dir;
        switch(direction) {
            case "left":
                dir = { x: -this.width, y : 0 };
                break;
            case "right":
                dir = { x: this.width, y : 0 };
                break;
            case "up":
                dir = { x:0, y:-this.height };
                break;
            case "down":
                dir = { x:0, y: this.height };
        }
        return dir;
    }
    getRandomDirection() {
        let dirArray = ["left","right","down","up"];
        let randomDirection = this.getMove(dirArray[Math.floor(Math.random() * dirArray.length)]);
        return randomDirection;
    }
    move(tiles) {
        let hasNotHitWall = true;
        let test = {
            position :this.getRandomDirection(),
            height : this.height,
            weight : this.width
        };

        while(hasNotHitWall) {
            hasNotHitWall = false;
            tiles.forEach(tile => {
                // debugger
                if(hasCollided(test,tile) && tile.type === "wall") {
                    hasNotHitWall = true;
                    // debugger
                }
            })
        }
        // debugger
        return test.position
    }
    update(tiles) {
        
        this.position = this.move(tiles)
    }

    draw(ctx) {
        if(this.type === "blinky")  ctx.fillStyle = "red"; 
        if(this.type === "pinky") ctx.fillStyle = "pink";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
    
}
export default Ghost;