class Tile {
    constructor(x,y,w,h,type = "empty") {
        this.x = x;
        this.y = y;
        this.g = 0;
        this.h = 0;
        this.f = 0;
        this.type =type;
        this.width = w;
        this.height = h;
    }
    getNeighbors( grid ) {
        let moves = [[-1,0],[0,1],[1,0],[0,-1]];
        let neighbors = [];
        for (let move of moves) {

            const [row,col] = move;
            let nr = row + this.y;
            let nc = col + this.x;

                //if it is or is not a wall, then we add this to our valid neighbors array;
                if(this.isValidLocation(grid,nr,nc) && 
                  (grid[nr][nc].type !== "wall")) {

                    neighbors.push(grid[nr][nc]);
                }
        }
        
        return neighbors
    }
    isValidLocation( grid, y, x ) {
        return grid[y] && grid[y][x] !== undefined;
    }
     hasCollided(position, tile) {

        //if their x and y position is the same they have collided.
        return position.x === tile.x && position.y === tile.y; 
    }
    draw( ctx ) {
        let posX = this.x * this.width;
        let posY = this.y * this.height;

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

        console.log("tiles drawn aiiiiii")

        
    }
}
export default Tile;