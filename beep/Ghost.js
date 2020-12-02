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
    }
    draw(ctx) {
        // debugger;
        if(this.type === "blinky")  ctx.fillStyle = "red"; 
        if(this.type === "pinky") ctx.fillStyle = "pink";
        ctx.fillRect(this.x * this.width, this.y * this.height, this.width, this.height);
    }
    update(puckman,tiles,ctx) {
        /* start, end, tiles */
        debugger
        let search = new Pathing(this,puckman, tiles);
        while (search.openSet.length) {
        
            let stepValue = search.step();
    
            if(!search.openSet.length) {
                console.log("ended no answer");
    
                return;
            }
            else if(search.openSet.length === 20) {

                let path = search.constructPath();
                debugger;
                return;
            }
            if(stepValue === 1) {
                console.log('answer found');
                let path = search.constructPath();
                console.log("Path", path);
                this.queue = path;
                path.forEach(tile => {
                    ctx.fillStyle ="purple"
                    ctx.fillRect(tile.x * tile.width,tile.y * tile.height, tile.width,tile.height );
                })

                break;
            }
    
           }
           console.log("broken")
    }
};

export default Ghost;