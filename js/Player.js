import Input from './Input.js'
// class Player {
//     constructor() {
//         //initial index for pucman
//         this.speed  = 3;
//         this.coords = { x :15, y:18}
//         this.isAlive = true;
//         this.input = new Input();
//     }

//     update () {
//         const inputDirection = this.input.getDirection();
//         console.log(inputDirection)
//         console.log('this is');
//         this.coords.x += inputDirection.x;
//         this.coords.y += inputDirection.y;


//     }

//     render (board) {
//         let child = board.childNodes;

//         let puck_man = document.createElement("div");
//         puck_man.style.gridRowStart = this.coords.y;
//         puck_man.style.gridColumnStart = this.coords.x;
//         puck_man.classList.add("puck-man");

//         child.forEach(node => {
//             if(node.style.gridRowStart == this.coords.y &&
//                node.style.gridColumnStart ==  this.coords.x){
//                 board.replaceChild(puck_man, node)
//                 console.log(node.style.gridRowStart, node.style.gridColumnStart)
//             }
//         })
        
//         // board.appendChild(puck_man);
//         // board[this.coords.x][this.coords.y] = 
        
//     }


// }

// export default Player;

class Player {
    constructor(game) {
        //initial index for pucman
        this.position = { x :17, y:14};
        this.direction = {x:0, y:0};
        this.speed  = 3;
        this.isAlive = true;
        this.input = new Input();
    }
    moveUp() {
        this.direction = { x: 0, y: -1 };
    }
    moveRight() {
        this.direction = { x: 1, y:0 };
    }
    moveDown () {
        this.direction =  { x:0 , y:1 };
    }
    moveLeft() {
        this.direction = { x: -1 , y:0};
    }
    update () {
        if(this.game.level[this.position.x + this.direction.x][this.position.y + this.direction.y] == 1){
            this.direction = { x:0, y:0 };
        }
        this.position.x += this.direction.x;
        this.position.y += this.direction.y;
    }

    draw (board) {
        let child = board.childNodes;

        let puck_man = document.createElement("div");
        puck_man.style.gridRowStart = this.position.y;
        puck_man.style.gridColumnStart = this.position.x;
        puck_man.classList.add("puck-man");

        child.forEach(node => {
            if(node.style.gridRowStart == this.position.y &&
               node.style.gridColumnStart ==  this.position.x){
                board.replaceChild(puck_man, node)
                console.log(node.style.gridRowStart, node.style.gridColumnStart)
            }
        })
        
        // board.appendChild(puck_man);
        // board[this.coords.x][this.coords.y] = 
        
    }


}

export default Player;