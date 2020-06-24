
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
        this.position = startPosition;
        
        this.type = type
    }
    getMove(direction){
        let dir;
        switch(direction) {
            case "left":
                dir = { x: -1, y : 0 };
                break;
            case "right":
                dir = { x: 1, y : 0 };
                break;
            case "up":
                dir = { x:0, y:-1 };
                break;
            case "down":
                dir = { x:0, y: 1 };
        }
        return dir;
    }
    getRandomDirection() {
        let dirArray = ["left","right","down","up"];
        let randomDirection = this.getMove(dirArray[Math.floor(Math.random() * dirArray.length)]);
        return randomDirection;
    }
    move(tiles) {
        let test = this.getRandomDirection();
        let pos = {
            x: test.x + this.position.x,
            y: test.y + this.position.y
        }
        let isWall = true;
        // debugger
        let tile = tiles[pos.y][pos.x];
        
        while(isWall) {
            isWall = false;
            if(hasCollided(pos, tile) && tile.type === "wall") {
                isWall = true;
                test = this.getRandomDirection();
                pos = {
                    x: test.x + this.position.x,
                    y: test.y + this.position.y
                }
                tile = tiles[pos.y][pos.x];
            }
        }
        // debugger
        return test
    }
    update(tiles) {
        let ultraIntelligentMove = this.move(tiles);
        this.position.x += ultraIntelligentMove.x;
        this.position.y += ultraIntelligentMove.y;
        // debugger
    }

    draw(ctx) {
        if(this.type === "blinky")  ctx.fillStyle = "red"; 
        if(this.type === "pinky") ctx.fillStyle = "pink";
        ctx.fillRect(this.position.x * this.width, this.position.y * this.height, this.width, this.height);
    }
    
}
export default Ghost;