//We must escape this dungeon, no matter the cost, we must. For the one that we love but has forgotten us.

//KEYS =>
// 5 - start
// 0 -  path
// 1 = wall
// 7 = target
const dungeon = [
    [5,0,0,1,0,0,0],
    [0,1,0,0,0,1,0],
    [0,1,0,0,0,0,0],
    [0,0,1,1,0,0,0],
    [1,0,1,7,0,1,0]
  ];
  //
  class BFS {
    constructor() {
      this.dungeon = new Map();
    }
  }
  
  //To create