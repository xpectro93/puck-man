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
        if(this.type === "wall"){
            ctx.fillStyle = `rgba(0, 0, 200)`;
            ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        }
        if(this.type === "orb") {
            let arcX = this.position.x+(this.width/2)
            let arcY =  this.position.y +((this.height)/2)
            ctx.beginPath();
            ctx.fillStyle = "white";
            ctx.arc(arcX,arcY,5,0,2*Math.PI,false)
            ctx.fill();
            // ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        }
        if(this.type === "empty") {
            ctx.fillStyle = `rgb(24,24,24)`;
            ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        }
        
    }
}
export default Tile;