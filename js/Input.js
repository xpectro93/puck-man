class Input {
    constructor(puck_man) {
        document.addEventListener("keydown", e => {
            console.log('Key is pressed', e.key)
            switch (e.key) {
                case 'ArrowUp':
                //   if (lastInputDirection.y !== 0) break
                  puck_man.moveUp();
                  break
                case 'ArrowDown':
                //   if (lastInputDirection.y !== 0) break
                puck_man.moveDown();
                  break
                case 'ArrowLeft':
                //   if (lastInputDirection.x !== 0) break
                puck_man.moveLeft();
                  break
                case 'ArrowRight':
                //   if (lastInputDirection.x !== 0) break
                puck_man.moveRight();
                  break
              }
        })
    }
}

export default Input;