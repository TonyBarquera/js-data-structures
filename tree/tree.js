class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if(this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while(true) {
        if(value < currentNode.value) {
          if(currentNode.left !== null) {
            currentNode = currentNode.left;
          } else {
            currentNode.left = newNode;
            return this;
          }
        } else {
          if(currentNode.right !== null) {
            currentNode = currentNode.right;
          } else {
            currentNode.right = newNode;
            return this;
          }
        }
      }
    }

    return this;
  }

  search(value, tree = this.root) {
    if(tree === null) {
      return false;
    }

    if(value == tree.value) {
      return true;
    } else if(value < tree.value) {
      return this.search(value, tree.left);
    } else {
      return this.search(value, tree.right);
    }
  }
}

const tree = new Tree();
tree.insert(10)
tree.insert(4);
tree.insert(2);
tree.insert(8);
tree.insert(20);
tree.insert(17);
tree.insert(170);

console.log(tree.search(17));
console.log(tree.search(2));
console.log(tree.search(15));