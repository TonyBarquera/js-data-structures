class Graph {
  constructor() {
    this.nodes = 0;
    this.adjacentList = {};
  }

  addVertex(node) {
    this.adjacentList[node] = [];
    this.nodes++;
  }

  addEdge(node1, node2) {
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
  }
}

const graph = new Graph();

graph.addVertex(1);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);
graph.addVertex(6);
graph.addVertex(8);

graph.addEdge(8,4);
graph.addEdge(4,1);
graph.addEdge(4,5);
graph.addEdge(1,6);
graph.addEdge(1,3);
graph.addEdge(5,3);
graph.addEdge(3,6);

console.log(graph);

// Graph {
//   nodes: 6,
//   adjacentList: {
//     '1': [ 4, 6, 3 ],
//     '3': [ 1, 5, 6 ],
//     '4': [ 8, 1, 5 ],
//     '5': [ 4, 3 ],
//     '6': [ 1, 3 ],
//     '8': [ 4 ]
//   }
// }