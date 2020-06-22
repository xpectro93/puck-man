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

    if(bottomPuck > topTile &&
       topPuck < bottomTile &&
       rightPuck > leftTile &&
       Math.round(leftPuck) < Math.round(rightTile) &&
       tile.type === "wall") {
        //    debugger
           return true;
    }
    return false;

}