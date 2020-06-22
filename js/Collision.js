export function hasCollided(puck_man, tile){
    //Puck collision
    let topPuck = puck_man.position.y 
    let bottomPuck = puck_man.position.y + puck_man.height;
    let leftPuck = puck_man.position.x;
    let rightPuck = puck_man.position.x + puck_man.width;


    //Tile collision
    let topTile = tile.position.y;
    let bottomTile = tile.position.y + tile.height;
    let leftTile = tile.position.x;
    let rightTile = tile.position.x + tile.width;

    //Top/bottomI

    if(Math.round(bottomPuck) > Math.round(topTile) &&
       Math.round(topPuck) < Math.round(bottomTile) &&
       Math.round(rightPuck) > Math.round(leftTile) &&
       Math.round(leftPuck) < Math.round(rightTile)) {
        //    debugger
           return true;
    }
    return false;

}