import { hasCollided, isValidLocation } from './Collision.js'
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

        this.h = 0;
        this.g = 0;
        this.f = 0;
    }
    move(input,map) {
        let PM = this.getPossibleMove(input)
        let posTile = map[PM.y][PM.x]
        if(hasCollided(PM,posTile) && posTile.type === "wall") return;
        this.direction =  input
    }
    moveLeft(tiles) {
        this.move({x:-1,y:0},tiles);
 
        
    };
    
    moveRight(tiles) {

        this.move({x:1,y:0},tiles);
    }

    moveUp(tiles) {

        this.move({x:0,y:-1},tiles);
    }

    moveDown(tiles) {

        this.move({x:0,y:1},tiles);

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
    getNeighbors(grid) {
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
        
        return neighbors
    }
}
export default PuckMan;

// getDistance (a,b) {
//     return Math.hypot(b.x - a.x, b.y - a.y);
// }