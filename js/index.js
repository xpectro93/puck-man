import Game from "./Game.js";

let root = document.getElementById("root");

let game = new Game();

let lastRenderTime = 0;


function gameLoop(currentTime) {
  
    requestAnimationFrame(gameLoop)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / 1) return
    
    root.innerHTML = ""
    //game updates;
    game.update();
    //game draws on the div given;
    game.draw(root)
    console.log('Game loop update');
    lastRenderTime = currentTime

}
  
  requestAnimationFrame(gameLoop)