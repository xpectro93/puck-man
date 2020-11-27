class Input {
    constructor(puck_man, tiles) {
      this.tiles = tiles
        document.addEventListener("keydown", e => {
            console.log('Key is pressed', e.key);
            switch (e.key) {
                case 'ArrowUp':
                //   if (lastInputDirection.y !== 0) break
                  puck_man.moveUp(tiles);
                  break
                case 'ArrowDown':
                //   if (lastInputDirection.y !== 0) break
                puck_man.moveDown(tiles);
                  break
                case 'ArrowLeft':
                //   if (lastInputDirection.x !== 0) break
                puck_man.moveLeft(tiles);
                  break
                case 'ArrowRight':
                //   if (lastInputDirection.x !== 0) break
                puck_man.moveRight(tiles);
                  break
              }
        })
    }
}

export default Input;