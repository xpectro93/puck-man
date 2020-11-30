import Tile from "./Tile.js";
import Ghost from './Ghost.js';
import PuckMan from './PuckMan.js';
const proto = [


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

//level shouldd be in charge of itself 
class Level {
    constructor(width, height) {
        let x = this.createBoard(proto, width, height)
        this.board = x[0];
        this.ghosts = x[1];
        // this.puckMan = x[2];
        // debugger;

    }
    createBoard( levelArray,w,h) { 
        let grid = [];
        // let puckman;
        let ghosts = [];
        levelArray.forEach( (row, y) => {
            let objectRowArray = [];

            row.forEach( (box, x) => {
                // if(box === 5) {
                //     puckman = new PuckMan(x,y,w,h);
                //     puckman.type = "puck";
                //     objectRowArray.push(puckman);
                //     console.log('newpuckman');
                //     // debugger
                // }
                if(box === 1) {
                    let newWall = new Tile(x,y,w,h, "wall");
                    objectRowArray.push(newWall);
                }
                 else if(box === 2) {
                    let newOrb = new Tile(x,y,w,h, "orb");
                    objectRowArray.push(newOrb);
                } 
                else if(box === "b") {
                    let blinky = new Ghost(x,y,w,h,'blinky');
                    blinky.type = "ghost";
                    ghosts.push(blinky);
                    objectRowArray.push(blinky);
                } 
                else if(box === "p") {
                    let pinky = new Ghost(x,y,w,h,'pinky');
                    pinky.type = "ghost";
                    ghosts.push(pinky);
                    objectRowArray.push(pinky);

                }
                else {
                    let newEmpty = new Tile(x,y,w,h);
                    objectRowArray.push(newEmpty);
                }
            })
            grid.push(objectRowArray);
        })
        return [grid, ghosts]
    }
    draw (ctx) {
 
            this.board.forEach( (row,i) => {
                // debugger;
                row.forEach( (cell,j) => {

                    // if(j === 14 && i ===23 )debugger
                    cell.draw(ctx);
                })
            })
        }

    update(from, to, actor) {
        if(from.type === "puck") {
            this.board[from[1]][from[0]].type = "empty";
            this.board[to[1]][to[0]] = actor;
        }
        else {
            this.board[from[1]][from[0]].type = "orb"
            this.board[to[1]][to[0]] = actor;
        };

    }
}
export default Level;

// export function createBoard (gameInstance, levelArray) {

//     let tiles = [];
//     let x = 0;
//     let y = 0;
//     let startPosition = [];
//     let ghosts =[]
//     levelArray.forEach(row => {
//         x = 0
//         row.forEach(box => {

//             if(box === 5) startPosition = [x, y]

//             if(box === "b") {
//                 ghosts.push(new Ghost(gameInstance, 5.25,[x,y],'blinky'));
//             }
//             if(box === "p") {
//                 ghosts.push(new Ghost(gameInstance, 5.25,[x,y],'pinky'));
//             }
//             let pos = {x,y};
//             if(box === 1) {
//                 // ctx.fillStyle = `rgba(0, 0, 200)`;
//                 //x,y,width, height
//                 tiles.push(new Tile(gameInstance,pos,"wall"))
//                 // ctx.fillRect(x, y, canvas.width/28, canvas.height/31);
//             }
//             if(box === 2) {
//                 tiles.push(new Tile(gameInstance,pos,"orb"))
//             }
           
//             x+=gameInstance.gameWidth/28
//         })
        
//         y+=gameInstance.gameHeight/31;
//     })
//     return [tiles, startPosition, ghosts]
// }
// 0 = empty
// 1 = wall
// 2 = orb
// 3 = ?
// 4 = powerUp
// 5 = spawning point
// 6 = TP



// export function createGameObjectGrid(gameInstance, levelArray) {
//     let grid = [];
//     let start;
//     let ghosts = [];
//     levelArray.forEach( (row, y) => {
//         let objectRowArray = [];

//         row.forEach( (box, x) => {
//             if(box === 5) start = {x,y}
//             let position = {x,y};
//             if(box === 1) {
//                 let newWall = new Tile(gameInstance,position, "wall");
//                 objectRowArray.push(newWall);
//             }else if(box === 2 || box === 5) {
//                 let newOrb = new Tile(gameInstance, position, "orb");
//                 objectRowArray.push(newOrb);
//             } else if(box === "b") {
//                 let blinky = new Ghost(gameInstance, 5.25,{x,y},'blinky');
//                 ghosts.push(blinky);
//                 objectRowArray.push(blinky);
//             } 
//             // else if(box === "p") {
//             //     let pinky = new Ghost(gameInstance, 5.25,{x,y},'pinky');
//             //     ghosts.push(pinky);
//             //     objectRowArray.push(pinky);

//             // }
//              else {
//                 let newEmpty = new Tile(gameInstance, position, "empty");
//                 objectRowArray.push(newEmpty);
//             }
            


//         })

//         grid.push(objectRowArray);

//     })

//     return [grid, start, ghosts];
// }