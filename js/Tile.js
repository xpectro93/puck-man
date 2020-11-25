import { isValidLocation } from "./Collision.js"

class Tile {
    constructor(gameInstance, position,type) {
        this.game = gameInstance;
        this.position = position;
        this.width = this.game.gameWidth / 28;
        this.height = this.game.gameHeight / 31;
        this.type = type;
        this.value = type === "orb" ? 10 :0;
        this.h = 0;
        this.g = 0;
        this.f = 0;
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
                  (grid[nr][nc].value !== "wall")) {

                    neighbors.push(grid[nr][nc]);
                }
        }
        
        return neighbors
    }
    draw (ctx) {

        let posX = this.position.x * this.width;
        let posY = this.position.y * this.height;
        if(this.type === "wall"){
            ctx.fillStyle = `rgba(0, 0, 200)`;
            ctx.fillRect(posX,posY, this.width, this.height);
        }
        if(this.type === "orb") {
            let arcX = posX + (this.width/2)
            let arcY =  posY +((this.height)/2)
            ctx.beginPath();
            ctx.fillStyle = "white";
            ctx.arc(arcX,arcY,5,0,2*Math.PI,false)
            ctx.fill();
            // ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        }
        if(this.type === "empty") {
            ctx.fillStyle = `rgb(24,24,24)`;
            ctx.fillRect(posX, posY, this.width, this.height);
        }
        
    }
}
export default Tile;

//Need to refactor the tile and coord system to take into account only index numbers
//this can greatly improve performance and provide easier drawing;
// [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

//typical to my previous attempt, it would take x and y coords according 
//to their index, drawing them would always work similarly,
// EXAMPLE
//width = 50 / height = 50;
// 150 x 150
//x = 0, y= 0,
// x + width, y + height;
//  0 * 50, 0 * 50;
//DRAWING => 2 * 50 = 100 
// this would create a box that is 150 x 150, similar to the size of the canvas
// we will create a matrix with objects 
// arr[1][1] = { w:50, h:50, position:{x:y}}

//Theory was correct, to draw you only have to multiply the x * w, and y * h; 