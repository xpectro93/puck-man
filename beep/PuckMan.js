import Tile from "./Tile.js";

class PuckMan extends Tile{
    constructor(x,y,w,h) {
        super(x,y,w,h)
        console.log("asfsf",x,y,w,h)
        this.direction = {
            x :0,
            y: 0
        }
        this.lastAttempt = {x: 0,y:0};
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
        console.log('calling puckman ddraw')
        let posX = this.x * this.width;
        let posY = this.y * this.height;
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