import Tile from "./Tile.js";

class PuckMan extends Tile{
    constructor(x,y,w,h) {
        super(x,y,w,h)

        this.direction = {
            x :0,
            y: 0
        }
        this.lastAttempt = {x: 0,y:0};
    }
    move(input,map) {
        let PM = this.getPossibleMove(input)
        let posTile = map[PM.y][PM.x]
        if(this.hasCollided(PM,posTile) && posTile.type === "wall") return;
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
        return { x: this.x + dir.x,
                 y: this.y + dir.y}
       
    }

    puckCollide(tiles) {
        //this should be broken down to smaller pieces to be added to board, andd if they return true updatee board
        let PM = this.getPossibleMove();
        let posTile = tiles[PM.y][PM.x];


        
        if( this.hasCollided(PM,posTile) && posTile.type === "wall" ) {
            this.direction = { x: 0, y: 0};
        }
        if( this.hasCollided(PM) && posTile.type === "orb" ) {
            let tile = tiles[PM.y][PM.x];
            tile.type = "empty";
            tile.value = 0;
        }

        // if ()

    }
    draw(ctx) {
        let posX = this.x * this.width;
        let posY = this.y * this.height;
        ctx.fillStyle ="Yellow";
        ctx.fillRect(posX, posY, this.width, this.height);
    }


    update() {
        //collision should be in the view of what the object is going to touch


        this.x += this.direction.x;
        this.y += this.direction.y;
    }
}
export default PuckMan;