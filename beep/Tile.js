class Tile {
    constructor(x,y, width, height, type) {
        this.x = x;
        this.y = y;
        this.g = 0;
        this.h = 0;
        this.f = 0;
        this.type =type
    }
    getNeighbors( grid ) {
        let moves = [[-1,0],[0,1],[1,0],[0,-1]];
        let neighbors = [];
        for (let move of moves) {

            const [row,col] = move;
            let nr = row + this.y;
            let nc = col + this.x;

                //if it is or is not a wall, then we add this to our valid neighbors array;
                if(isValidLocation(grid,nr,nc) && 
                  (grid[nr][nc].type !== "wall")) {

                    neighbors.push(grid[nr][nc]);
                }
        }
        
        return neighbors
    }
    isValidLocation( grid, y, x ) {
        return grid[y] && grid[y][x] !== undefined;
    }
}