class Input {
    constructor(puck_man, tiles) {
      this.tiles = tiles
        document.addEventListener("keydown", e => {
            console.log('Key is pressed', typeof e.key);
            switch (e.key) {
              /* UP */
              case 'ArrowUp':
                puck_man.moveUp(tiles);
                break;
              case "w":
                puck_man.moveUp(tiles);
                break;
              case "W":
                puck_man.moveUp(tiles);
                break;

                /* DOWN */
              case 'ArrowDown':
                puck_man.moveDown(tiles);
                break;
              case 's':
                puck_man.moveDown(tiles);
                  break;
              case 'S':
                puck_man.moveDown(tiles);
                break;

                /* LEFT */
              case 'ArrowLeft':
              puck_man.moveLeft(tiles);
                break;
              case 'a':
                puck_man.moveLeft(tiles);
                break;
              case 'A':
                puck_man.moveLeft(tiles);
                break;
              
                /* RIGHT */
              case 'ArrowRight':
                puck_man.moveRight(tiles);
                break;
              case 'd':
                puck_man.moveRight(tiles);
                break;
              case 'D':
                 puck_man.moveRight(tiles);
                 break;
                  
              }
        })
    }
}

export default Input;