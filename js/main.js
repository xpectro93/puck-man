import Game from './Game.js'


let canvas = document.getElementById("game");
let ctx = canvas.getContext('2d');

//x, y, width, height
const GAME_WIDTH = canvas.width = window.innerWidth;
const GAME_HEIGHT = canvas.height = window.innerHeight;

let SPEED = 2;
let game = new Game(GAME_WIDTH, GAME_HEIGHT, SPEED)
let lastRenderTime = 0;

// ctx.beginPath()          
// ctx.fillStyle = `rgba(200, 0, 0)`;
//  ctx.arc(GAME_WIDTH/2,GAME_HEIGHT/2, 10,0,2*Math.PI,true)
//  ctx.stroke()
function gameLoop (currentTime) {

    requestAnimationFrame(gameLoop);

    const secSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if(secSinceLastRender < 1 / SPEED ) return;

    lastRenderTime = currentTime;

    //clear board before re-rendering;
    ctx.clearRect(0,0,canvas.width, canvas.height)
    
    game.update(ctx);
    game.draw(ctx);
    console.log('render')

}
requestAnimationFrame(gameLoop);


