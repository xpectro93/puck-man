export function hasCollided(puck_man, tile){
    //Puck collision
    let topPuck = Math.round(puck_man.position.y );
    let bottomPuck = Math.round(puck_man.position.y + puck_man.height);
    let leftPuck = Math.round(puck_man.position.x);
    let rightPuck = Math.round(puck_man.position.x + puck_man.width);


    //Tile collision
    let topTile = Math.round(tile.position.y);
    let bottomTile = Math.round(tile.position.y + tile.height);
    let leftTile = Math.round(tile.position.x);
    let rightTile = Math.round(tile.position.x + tile.width);

    //Top/bottomI

    if(bottomPuck > topTile &&
       topPuck < bottomTile &&
       rightPuck > leftTile &&
       leftPuck < rightTile) {
        //    debugger
           return true;
    }
    return false;

}