import Game from "./Game.js";

let canvas = document.getElementById("game");

let ctx = canvas.getContext("2d");

const GAME_WIDTH = canvas.width = window.innerWidth;
const GAME_HEIGHT = canvas.height = window.innerHeight;

const SPEED = 1.50;
let game = new Game( GAME_WIDTH, GAME_HEIGHT);
let lastRenderTime = 0;

function gameLoop (currentTime) {

    requestAnimationFrame(gameLoop);

    const secSinceLastRender = (currentTime - lastRenderTime) / 1000;

    if(secSinceLastRender < 1 / SPEED ) return;

    lastRenderTime = currentTime;
    
    ctx.clearRect(0,0,canvas.width, canvas.height)
    game.update();
    game.draw(ctx);


}
requestAnimationFrame(gameLoop);


// game.draw(ctx)
