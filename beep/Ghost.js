import Pathing from "./Pathing.js"
import Tile from "./Tile.js";
class Ghost extends Tile{
    constructor(x,y,w,h,type) {
        super(x,y,w,h,type)
        // this.direction = {
        //     x:0,
        //     y:0
        // }
        this.queue = []
        this.status = "chase"
    }
    draw(ctx) {
        // debugger;
        if(this.type === "blinky")  ctx.fillStyle = "red"; 
        if(this.type === "pinky") ctx.fillStyle = "pink";
        ctx.fillRect(this.x * this.width, this.y * this.height, this.width, this.height);
    }
    updateStatus(newStatus) {
        this.status = newStatus;
    }
    update(puckman,tiles,ctx) {
        /* start, end, tiles */
        // debugger
        let search = new Pathing(this,puckman, tiles);
        if( this.queue.length ) {
            console.log("POPPING")
            let n = this.queue.shift();
            debugger;
            this.x = n.x;
            this.y = n.y;
            return;
        }
        while (search.openSet.length) {
        
            let stepValue = search.step();
            let path = search.constructPath();
            let  next = path[1]
            if(!search.openSet.length) {
                console.log("ended no answer");
    
                return;
            }
            else if(search.closedSet.size === 13) {

                // let nextPosition = search.constructPath()[1];
                // debugger
                this.x = next.x;
                this.y = next.y;
                return;
            }
            
            if(stepValue === 1) {
                this.x = path[0].x;
                this.y = path[0].y;
                this.queue = path.splice(1);
                // debugger

       

                break;
            }
    
           }
           console.log("broken")
    }
};

export default Ghost;

/**
 * we might be able to have some way to know if the ghost does a far seach
 * of a short search and approach each update accordingly
 * 
 * if long search we only do a >13 close set search;
 * 
 * if short close search we get 
 */