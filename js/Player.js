import Input from './Input.js'
class Player {
    constructor() {
        //initial index for pucman
        this.speed  = 1;
        this.coords = { x :10, y:10}
        this.isAlive = true;
        this.input = new Input();
    }

    update () {
        const inputDirection = this.input.getDirection();
        console.log(inputDirection)
        this.coords.x += inputDirection.x;
        this.coords.y += inputDirection.y;


    }

    render (board) {
        // console.log('render player')
        const puck_man =  document.createElement("div");
        puck_man.style.gridRowStart = this.coords.y;
        puck_man.style.gridColumnStart = this.coords.x;
        puck_man.classList.add("puck-man");
        board.appendChild(puck_man);
        
    }


}

export default Player;