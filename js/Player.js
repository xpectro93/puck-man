import Input from './Input.js'
class Player {
    constructor() {
        //initial index for pucman
        this.speed  = 3;
        this.coords = { x :10, y:10}
        this.isAlive = true;
        this.input = new Input();
    }

    update () {
        const inputDirection = this.input.getDirection();
        console.log(inputDirection)
        console.log('this is');
        this.coords.x += inputDirection.x;
        this.coords.y += inputDirection.y;


    }

    render (board) {
        let child = board.childNodes;

        let puck_man = document.createElement("div");
        puck_man.style.gridRowStart = this.coords.y;
        puck_man.style.gridColumnStart = this.coords.x;
        puck_man.classList.add("puck-man");

        child.forEach(node => {
            if(node.style.gridRowStart == this.coords.y &&
               node.style.gridColumnStart ==  this.coords.x){
                board.replaceChild(puck_man, node)
                console.log(node.style.gridRowStart, node.style.gridColumnStart)
            }
        })
        
        // board.appendChild(puck_man);
        // board[this.coords.x][this.coords.y] = 
        
    }


}

export default Player;