import Pathing from "./Pathing.js"
import Tile from "./Tile.js";
class Ghost extends Tile{
    constructor(x,y,w,h,type) {
        super(x,y,w,h,type)
        this.direction = {
            x:0,
            y:0
        }
    }
    draw(ctx) {
        // debugger;
        if(this.type === "blinky")  ctx.fillStyle = "red"; 
        if(this.type === "pinky") ctx.fillStyle = "pink";
        ctx.fillRect(this.x * this.width, this.y * this.height, this.width, this.height);
    }
    update() {

    }
};

export default Ghost;