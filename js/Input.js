class Input {
    constructor() {
    }
    getDirection () {
        window.addEventListener('keydown', e => {
            console.log(e.key)
            switch (e.key) {
              case 'ArrowUp':
                // if (lastInputDirection.y !== 0) break
                return { x: 0, y: -1 }
                break
              case 'ArrowDown':
                // if (lastreturn !== 0) break
                return { x: 0, y: 1 }
                break
              case 'ArrowLeft':
                // if (lastreturn !== 0) break
                return { x: -1, y: 0 }
                break
              case 'ArrowRight':
                // if (lastreturn !== 0) break
                return { x: 1, y: 0 }
                break
            }
          })
        return this.direction;
    }
}
export default Input;
// class Input {
//       constructor(puck_man, game) {
//         window.addEventListener('keydown', e => {
//           switch (e.key) {
//             case 'ArrowUp':
//               puck_man.moveUp();
//               break
//             case 'ArrowDown':
//               puck_man.moveDown();
//               break
//             case 'ArrowLeft':
//               puck_man.moveLeft();
//               break
//             case 'ArrowRight':
//               puck_man.moveRight();
//               break
//           }
//         })
//       }
 
        
 

//   }
//   export default Input;