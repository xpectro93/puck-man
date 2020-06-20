class Input {
    constructor() {
        this.direction = {x: 0, y :0};
    }
    getDirection () {
        window.addEventListener('keydown', e => {
            console.log(e.key)
            switch (e.key) {
              case 'ArrowUp':
                // if (lastInputDirection.y !== 0) break
                this.direction = { x: 0, y: -1 }
                break
              case 'ArrowDown':
                // if (lastthis.direction = !== 0) break
                this.direction = { x: 0, y: 1 }
                break
              case 'ArrowLeft':
                // if (lastthis.direction = !== 0) break
                this.direction = { x: -1, y: 0 }
                break
              case 'ArrowRight':
                // if (lastthis.direction = !== 0) break
                this.direction = { x: 1, y: 0 }
                break
            }
          })
        return this.direction;
    }
}
export default Input;