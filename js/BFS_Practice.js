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
//We can check if the coordinate is out of bounds
//by checking if our x or y are less than 0

//we ccan start to solve our problem by adding our starting point to the queue;
//Then we can visit our valid neighbors and add them to the queue;

// const findValidNeighbors =
// const findExit = (start, end) => {
//     let 
// }

//Breaking down the problem;
//first we have to create a graph out of the tiles we can move through;
//We can then use the graph to find the shortest path from our starting
//to our end position
// -- one thing we may need to keep in mind would be a way to keep track of the path
//    we took to get there


class GNode {
  constructor(val) {
    this.val = val;
  }
};



class Graph {
  constructor() {
    this.list = new Map();
  }
  //This will be the block objs
  addVertex(vertex) {
    if(!this.list.has(vertex)) {
      this.list.set(vertex, new Set());
    }
    return this;
  }
  // this will be the nodes they are connected to 
  addEdge(vertex, node) {
    //checks if vertex exists within the graph;
    if(this.list.has(vertex)){
      let vertexSet = this.list.get(vertex);

      //if not connected yet, we add;
      if(!vertexSet.has(node)) {
        vertexSet.add(node);
      }
    }else return;
  };

  //DFS uses stacks;
  DFSPrint(start) {
    //keep track of visited neighbors
    let visited = new Set();

   const DFSHelper = (ref) => {
    //add to visited to prevent infinite loop;
    visited.add(ref);
    console.log(ref);

    //start checking neighbors;
    let refSet = this.list.get(ref);

    refSet.forEach(node => {
      if(!visited.has(node)) {
        DFSHelper(node);
      }
    })

   }

   //start DFS 
   DFSHelper(start);
  }
  //BFS uses queues;
  BFSPrint(start) {
    let visited = new Set();
    visited.add(start);
    let q = [start];


    //this will keep going until there are no  more nodes to look at on the queue;
    while(q.length) {
      let current = q.shift();

      console.log(current.val)
      let neighbors = this.list.get(current);

        neighbors.forEach(node => {
          if(!visited.has(node)){
            visited.add(node);
            q.push(node);
          }
        })

      


    }
   }


};


let a = new GNode('a');
let b = new GNode('b');
let c = new GNode('c');
let d = new GNode('d');
let e = new GNode('e');
let f = new GNode('f');


let letters = [a,b,c,d,e,f];
let test = new Graph();

letters.forEach(letter => test.addVertex(letter));
test.addEdge(a, b);
test.addEdge(a, d);
test.addEdge(a, e);
test.addEdge(b, c);
test.addEdge(d, e);
test.addEdge(e, f);
test.addEdge(e, c);
test.addEdge(c, f);

// test.DFSPrint(a);
test.BFSPrint(a);

