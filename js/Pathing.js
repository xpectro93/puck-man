class Pathing {
    constructor(start, target, tiles) {
    
        this.closedSet = new Set();
        this.start = start;
        this.openSet = [start];
        this.lastVisited = start;
        this.target = target;
        this.tiles = tiles;
        console.log("this b target", target)

    }
    step() {
        //initialize at 0 because is the first item in the queue;
        let lowestFIndex = 0;
        for(let i = 0; i < this.openSet.length;i++) {
            console.log('called', this.closedSet, this.openSet, this.target)
            //TODO:Change this to priority queue/minhheap for O(1) lookup

            //check if a vertex in openSet has Lower f than current lowest f
            if(this.openSet[lowestFIndex].f > this.openSet[i].f) {
                lowestFIndex = i
            }

            //If F values are tied check manhattan distance;-
            //if distance of end vertex is shorter. It becomes new lowest F 
            if(this.openSet[lowestFIndex].f === this.openSet[i].f) {
                if(this.openSet[lowestFIndex].h >= this.openSet[i].h) {
                    lowestFIndex = i;
                }
            }
            

        }


        //change lastVertexVisited to be the current vertex
        let current =  this.openSet[lowestFIndex];
        this.lastVertexVisited = current;
        // debugger

        console.log("current", current)
        //check if we have found our target;
        if(this.target === current) {
            console.log('Target has been found');
            //Break out of function once target is found;
            return 1;
        }

        //remove from openSet once we have done find
        this.openSet = this.openSet.filter(vertex => vertex !== current);

        this.closedSet.add(current);
        let currentNeighbors = current.getNeighbors(this.tiles);
        // debugger;
        for(let neighbor of currentNeighbors) {

            //if neighbor is part of closed set, then skip 
            if(this.closedSet.has(neighbor)) continue;

            //possible new g value for the neighbor of current vertex;
            let tempG = current.g + this.getHeuristic(current, neighbor);

            //check if new path to neighbor is shorter OR if neighbor has never been visited.
            // so we can their g and h values
            if(tempG < neighbor.g || !this.openSet.includes(neighbor)) {

                //update g, h, f values
                neighbor.g = tempG;
                neighbor.h = this.getHeuristic(neighbor, this.target);
                neighbor.f = neighbor.g + neighbor.h;

                //create a link to later use as Linked list to create path
                neighbor.previous = current;

                //add to queue to items to be explored
                if(!this.openSet.includes(neighbor)) this.openSet.push(neighbor);
            }
        };
    }
    getHeuristic(start, end) {
        console.log("start abd ed",start,end)
        let newX = Math.abs(start.position.x - end.position.x);
        let newY = Math.abs(start.position.y - end.position.y);

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