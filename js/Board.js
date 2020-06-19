
class Board {
    constructor(level) {
        //level should be an array
        this.grid = level;
    }
    createBoard () {
        for ( let i = 0; i < this.game.grid.length; i++) {
            const box = document.createElement("div");
            
            
            switch(this.game.grid[i]) {
                case 0:
                  box.classList.add("orb");
                  break;
                case 1:
                    box.classList.add("wall");
                  break;
                case 2:
                    // box.classList.add("")
                 break;
                case 3:
                       box.classList.add("power-orb");
                  break;
                case 4:
                    break;
                default:
                  
              }
              this.el.appendChild(box);
        }
    }
    

}
export default Board;