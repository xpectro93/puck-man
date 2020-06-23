// import { hasCollided } from "./Collision.js";

class Tile {
    constructor(gameInstance, position,type) {
        this.game = gameInstance;
        this.position = position;
        this.width = this.game.gameWidth / 28;
        this.height = this.game.gameHeight / 31;
        this.type = type;
        this.hasCollision = true;
        this.value = type === "orb" ? 10 :0;
    }
    update(ctx) {
        
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