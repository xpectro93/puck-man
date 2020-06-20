class PuckMan {
    constructor(){
        this.position = {
            x: 14,
            y: 17
        }
    }
    isValidMove(direction,board) {
        let newX = this.position.x + direction.y;
        let newY = this.position.y + direction.y;
        if(board.level[newY][newX] !== 1){
            return true
        }
    }

    update(direction, board){
        console.log('puckman updating')
        console.log('old', this.position)


            board.level[this.position.y][this.position.x] = 4;
            if(board.level[this.position.y])
            this.position.x += direction.x;
            this.position.y += direction.y;
            // board.level[this.position.y][this.position.x] = 5;

        
    }
    // draw (board) {
    //     let child = board.childNodes;

    //     let puck_man = document.createElement("div");
    //     puck_man.style.gridRowStart = this.position.y;
    //     puck_man.style.gridColumnStart = this.position.x;
    //     puck_man.classList.add("puck-man");

    //     console.log("this is gameboard",this.game.level)
    //     child.forEach(node => {
    //         if(node.style.gridRowStart == this.position.y &&
    //            node.style.gridColumnStart ==  this.position.x){
    //             board.replaceChild(puck_man, node)
    //         }
    //     })

        
    // }
}
export default PuckMan;