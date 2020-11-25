class Pathing {
    constructor(start, target, tiles) {
    
        this.seen = new Set();
        this.start = start;
        this.openSet = [start];
        this.lastVisited = start;

    }
    step() {

    }
    getHeuristic(start, end) {
        let newX = Math.abs(start.x - end.x);
        let newY = Math.abs(start.y - end.y);

        return newX + newY;
    }
    constructPath () {
        let tempPath = [];
        let currentVertex = this.lastVertexVisited

        //traverse through "linkedList"
        while(currentVertex) {
            tempPath.push(currentVertex)
            currentVertex = currentVertex.previous;
        }
        return tempPath.reverse();
    }
}
export default Pathing;