class Player {
    constructor() {
        //initial index for pucman
        this.speed  = 1;
        this.coords = { x :10, y:10}
        this.isAlive = true;
    }

    update () {
        console.log('update player')
    }

    render (board) {
        console.log('render player')
        const puck_man =  document.createElement("div");
        puck_man.style.gridRowStart = this.coords.x;
        puck_man.style.gridColumnStart = this.coords.y;
        puck_man.classList.add("puck-man");
        board.appendChild(puck_man);
        
    }


}

export default Player;