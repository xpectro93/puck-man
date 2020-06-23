import Tile from "./Tile.js"
import Ghost from './Ghost.js';
export function createBoard (gameInstance, levelArray) {

    let tiles = [];
    let x = 0;
    let y = 0;
    let startPosition = [];
    let ghosts =[]
    levelArray.forEach(row => {
        x = 0
        row.forEach(box => {

            if(box === 5) startPosition = [x, y]

            if(box === "b") {
                ghosts.push(new Ghost(gameInstance, 5.25,[x,y],'blinky'));
            }
            if(box === "p") {
                ghosts.push(new Ghost(gameInstance, 5.25,[x,y],'pinky'));
            }
            let pos = {x,y};
            if(box === 1) {
                // ctx.fillStyle = `rgba(0, 0, 200)`;
                //x,y,width, height
                tiles.push(new Tile(gameInstance,pos,"wall"))
                // ctx.fillRect(x, y, canvas.width/28, canvas.height/31);
            }
            if(box === 2) {
                tiles.push(new Tile(gameInstance,pos,"orb"))
            }
            // if(box === 3) {
            //     ctx.fillStyle = `rgba(0, 255,0`;
            //     ctx.fillRect(x, y, canvas.width/28, canvas.height/31);
            // }
            // if(box === 5) {
            //     console.log('this is happening',x,y)
            //     ctx.fillStyle = `rgba(255, 255,0`;
            //     ctx.fillRect(x, y, canvas.width/28, canvas.height/31);
            // }
            x+=gameInstance.gameWidth/28
        })
        
        y+=gameInstance.gameHeight/31;
    })
    return [tiles, startPosition, ghosts]
}
// 0 = empty
// 1 = wall
// 2 = orb
// 3 = ?
// 4 = powerUp
// 5 = spawning point
// 6 = TP
export const proto = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,2,2,2,2,2,2,2,2,2,2,2,2,1,1,2,2,2,2,2,2,2,2,2,2,2,2,1],
    [1,2,1,1,1,1,2,1,1,1,1,1,2,1,1,2,1,1,1,1,1,2,1,1,1,1,2,1],
    [1,4,1,1,1,1,2,1,1,1,1,1,2,1,1,2,1,1,1,1,1,2,1,1,1,1,4,1],
    [1,2,1,1,1,1,2,1,1,1,1,1,2,1,1,2,1,1,1,1,1,2,1,1,1,1,2,1],
    [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
    [1,2,1,1,1,1,2,1,1,2,1,1,1,1,1,1,1,1,2,1,1,2,1,1,1,1,2,1],
    [1,2,1,1,1,1,2,1,1,2,1,1,1,1,1,1,1,1,2,1,1,2,1,1,1,1,2,1],
    [1,2,2,2,2,2,2,1,1,2,2,2,2,1,1,2,2,2,2,1,1,2,2,2,2,2,2,1],
    [1,1,1,1,1,1,2,1,1,1,1,1,2,1,1,2,1,1,1,1,1,2,1,1,1,1,1,1],
    [1,1,1,1,1,1,2,1,1,1,1,1,2,1,1,2,1,1,1,1,1,2,1,1,1,1,1,1],
    [1,1,1,1,1,1,2,1,1,0,0,0,0,'b',0,0,0,0,0,1,1,2,1,1,1,1,1,1],
    [1,1,1,1,1,1,2,1,1,0,1,1,1,0,0,1,1,1,0,1,1,2,1,1,1,1,1,1],
    [1,1,1,1,1,1,2,1,1,0,1,0,'i','p','c',0,0,1,0,1,1,2,1,1,1,1,1,1],
    [6,0,0,0,0,0,2,0,0,0,1,0,0,0,0,0,0,1,0,0,0,2,0,0,0,0,0,6],
    [1,1,1,1,1,1,2,1,1,0,1,0,0,0,0,0,0,1,0,1,1,2,1,1,1,1,1,1],
    [1,1,1,1,1,1,2,1,1,0,1,1,1,1,1,1,1,1,0,1,1,2,1,1,1,1,1,1],
    [1,1,1,1,1,1,2,1,1,0,0,0,0,0,0,0,0,0,0,1,1,2,1,1,1,1,1,1],
    [1,1,1,1,1,1,2,1,1,0,1,1,1,1,1,1,1,1,0,1,1,2,1,1,1,1,1,1],
    [1,1,1,1,1,1,2,1,1,0,1,1,1,1,1,1,1,1,0,1,1,2,1,1,1,1,1,1],
    [1,2,2,2,2,2,2,2,2,2,2,2,2,1,1,2,2,2,2,2,2,2,2,2,2,2,2,1],
    [1,2,1,1,1,1,2,1,1,1,1,1,2,1,1,2,1,1,1,1,1,2,1,1,1,1,2,1],
    [1,2,1,1,1,1,2,1,1,1,1,1,2,1,1,2,1,1,1,1,1,2,1,1,1,1,2,1],
    [1,4,2,2,1,1,2,2,2,2,2,2,2,0,5,2,2,2,2,2,2,2,1,1,2,2,4,1],
    [1,1,1,2,1,1,2,1,1,2,1,1,1,1,1,1,1,1,2,1,1,2,1,1,2,1,1,1],
    [1,1,1,2,1,1,2,1,1,2,1,1,1,1,1,1,1,1,2,1,1,2,1,1,2,1,1,1],
    [1,2,2,2,2,2,2,1,1,2,2,2,2,1,1,2,2,2,2,1,1,2,2,2,2,2,2,1],
    [1,2,1,1,1,1,1,1,1,1,1,1,2,1,1,2,1,1,1,1,1,1,1,1,1,1,2,1],
    [1,2,1,1,1,1,1,1,1,1,1,1,2,1,1,2,1,1,1,1,1,1,1,1,1,1,2,1],
    [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
]


export function createGameObjectGrid(gameInstance, levelArray) {
    let grid = [];
    let start;
    levelArray.forEach( (row, y) => {
        let objectRowArray = [];

        row.forEach( (box, x) => {
            if(box === 5) start = {x,y}
            let position = {x,y};
            if(box === 1) {
                let newWall = new Tile(gameInstance,position, "wall");
                objectRowArray.push(newWall);
            }else if(box === 2 || box === 5) {
                let newOrb = new Tile(gameInstance, position, "orb");
                objectRowArray.push(newOrb);
            } else {
                let newEmpty = new Tile(gameInstance, position, "empty");
                objectRowArray.push(newEmpty);
            }
            


        })

        grid.push(objectRowArray);

    })

    return [grid, start];
}