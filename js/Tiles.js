class Tiles {
    constructor(game,position, type) {
        
        this.game = game;
        this.position = position;
        this.type = type;
    }
    draw(board) {
        let tile = document.createElement("div");
        tile.style.gridRowStart = this.position.y;
        tile.style.gridColumnStart = this.position.x;
        tile.classList.add(`${this.type}`);
    }   
}
export default Tiles;