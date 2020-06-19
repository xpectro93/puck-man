class View {
    constructor(game, el) {
        this.game = game;
        this.el = el;
        this.render = 0;
        this.play();

    }

    play() {
        this.createBoard();
        console.log(window.requestAnimationFrame)
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
                    box.classList.add("ghost-lair");
                 break;
                case 3:
                       box.classList.add("power-orb")
                  break;
                case 4:
                    break;
                default:
                  
              }
              this.el.appendChild(box);
        }
    }
    getTime(currentTime) {
        this.el
    }

}
export default View;