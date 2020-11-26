
import { hasCollided, isValidLocation } from "./Collision.js";
import Pathing from "./Pathing.js";

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
        
        this.type = type;
        this.randomMoveCount = 0;


        this.h = 0;
        this.g = 0;
        this.f = 0;
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
    move(tiles, puck_position) {
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


            if(this.randomMoveCount % 21 === 0) {
                console.log('this b random')
                if(!this.isMoveCloser(puck_position, pos)) {
                    isWall = true;
                    test = this.getRandomDirection();
                    pos = {
                        x: test.x + this.position.x,
                        y: test.y + this.position.y
                    }
                    tile = tiles[pos.y][pos.x];
                }
            }
            
        }
        // debugger
        return test
    }
    isMoveCloser(puckPos, p) {
        let isXcloser = false;
        let isYcloser = false;

        if ((p.x - puckPos.x) > (this.position.x - puckPos.x)){
            isXcloser = true
        } 
        // debugger
        if ((p.y - puckPos.y) > (this.position.y - puckPos.y)) {
            isYcloser = true;
        }
        if(isXcloser || 
           isYcloser) return true;
        return false;

    }
    update(tiles,puck) {
        
        let search = new Pathing(this, puck, tiles);

        console.log("NEW SEARCH")
        //start, end, tiles,ctx
       while (search.openSet.length) {
        
        let stepValue = search.step();

        if(!search.openSet.length) {
            console.log("ended no answer");

            return;
        }
        if(stepValue === 1) {
            console.log('answer found');
            let path = search.constructPath();
            console.log("Path", path) 
            break;
        }

       }
       console.log("broken")









        // let ultraIntelligentMove = this.move(tiles,puck);
        // this.randomMoveCount+=1
        // this.position.x += ultraIntelligentMove.x;
        // this.position.y += ultraIntelligentMove.y;
        // debugger
    }

    draw(ctx) {
        if(this.type === "blinky")  ctx.fillStyle = "red"; 
        if(this.type === "pinky") ctx.fillStyle = "pink";
        ctx.fillRect(this.position.x * this.width, this.position.y * this.height, this.width, this.height);
    }
    getNeighbors(grid) {

        console.log('this b grid, ', grid, this)
        // Could be a property of the class?
        let moves = [[-1,0],[0,1],[1,0],[0,-1]];
        let neighbors = [];
        for (let move of moves) {

            const [row,col] = move;
            let nr = row + this.position.y;
            let nc = col + this.position.x;

                //if it is or is not a wall, then we add this to our valid neighbors array;
                if(isValidLocation(grid,nr,nc) && 
                  (grid[nr][nc].type !== "wall")) {

                    neighbors.push(grid[nr][nc]);
                }
        }
        console.log('NEIGHTNBOERs', neighbors)
        return neighbors
    }
    
}
export default Ghost;