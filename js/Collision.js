// export function hasCollided(avatar, tile){
//     //Puck collision
//     let topPuck = Math.round(avatar.position.y );
//     let bottomPuck = Math.round(avatar.position.y + avatar.height);
//     let leftPuck = Math.round(avatar.position.x);
//     let rightPuck = Math.round(avatar.position.x + avatar.width);


//     //Tile collision
//     let topTile = Math.round(tile.position.y);
//     let bottomTile = Math.round(tile.position.y + tile.height);
//     let leftTile = Math.round(tile.position.x);
//     let rightTile = Math.round(tile.position.x + tile.width);

//     //Top/bottomI

//     if(bottomPuck > topTile &&
//        topPuck < bottomTile &&
//        rightPuck > leftTile &&
//        leftPuck < rightTile) {
//         //    debugger
//            return true;
//     }
//     return false;

// }

//avatar is obj containing indexes as position, and with and height, same for tile;
export const isValidLocation = (mtx, y,x) =>  mtx[y] && mtx[y][x]!== undefined;
export function hasCollided(position, tile) {

    //if their x and y position is the same they have collided.
    if(position.x === tile.position.x &&
        position.y === tile.position.y) {

            return true;
        }  
    return false;
}