
class Board {
    constructor(level) {
        //level should be an array
        this.level = level
    }
    update () {

    }
    draw (board) {
        this.level.forEach((row,i) => {

            row.forEach((segment, j) => {
                const box = document.createElement("div");

                box.style.gridRowStart = i + 1;
                box.style.gridColumnStart = j + 1;
                switch(segment) {
                    case 0:
                      box.classList.add("orb");
                      break;
                    case 1:
                        box.classList.add("wall");
                      break;
                    case 2:
                        box.classList.add("ghost-lair");
                     break;
                    case 3:
                           box.classList.add("power-orb")
                      break;
                    case 5:
                           box.classList.add('puck-man');
                           console.log('pacman is here', i,j)
                        break;
                    default:
                      
                }
                //   if(i === 490){
                //       box.classList.add("puck-man");
                //   }
                  board.appendChild(box);
  
            })
                
        })
    }
    

}
export default Board;