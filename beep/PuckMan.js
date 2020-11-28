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
    
    updateDirection(input,map) {
        let PM = this.getPossibleMove(input)
        let posTile = map[PM.y][PM.x]
        if(this.hasCollided(PM,posTile) && posTile.type === "wall"){
            console.log("error",this.hasCollided(PM,posTile),PM,posTile )
            return};
        this.direction  =  input
    }
    getPossibleMove(dir = this.direction) {
        return { x: this.x + dir.x,
                 y: this.y + dir.y}
       
    }
    moveLeft(tiles) {
        console.log('left')
        this.updateDirection({x:-1,y:0},tiles);     
    };
    
    moveRight(tiles) {
        console.log('right')

        this.updateDirection({x:1,y:0},tiles);
    }

    moveUp(tiles) {
        console.log('up')

        this.updateDirection({x:0,y:-1},tiles);
    }

    moveDown(tiles) {
        console.log('down')

        this.updateDirection({x:0,y:1},tiles);

    }
    puckCollide(tiles) {
        //this should be broken down to smaller pieces to be added to board, andd if they return true updatee board
        let PM = this.getPossibleMove();
        let posTile = tiles[PM.y][PM.x];

        // debugger;
        
        if( this.hasCollided(PM,posTile) && posTile.type === "wall" ) {
            this.direction = { x: 0, y: 0};
            return;
        }
        if( this.hasCollided(PM,posTile) && posTile.type === "orb" ) {
            posTile.type = "empty";
            posTile.value = 0;
            this.update();
        }

    }
    draw(ctx) {
        let posX = this.x * this.width;
        let posY = this.y * this.height;
        ctx.fillStyle ="Yellow";
        ctx.fillRect(posX, posY, this.width, this.height);
    }


    update(board) {
        //collision should be in the view of what the object is going to touch
        this.puckCollide(board);


        this.x += this.direction.x;
        this.y += this.direction.y;
    }
}
export default PuckMan;