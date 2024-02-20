class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(index, value) {
    if(index >= this.length) {
      return this.append(value);
    }

    const newNode = new Node(value);
    const firstPointer = this.getTheIndex(index - 1);
    const holdingPointer = firstPointer.next;
    firstPointer.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this;
  }

  remove(index) {
    if(index > 0 && index <= this.length) {
      const previousNode = this.getTheIndex(index - 1);
      const holdingPointer = previousNode.next.next;
      previousNode.next = holdingPointer;
      this.length--;
    }
    
    return this;
  }

  getTheIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while(counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }
}

const myLinkedList = new SinglyLinkedList(1); // 1
console.log(myLinkedList.append(4)); // 1 4
console.log(myLinkedList.prepend(0)); // 0 1 4
console.log(myLinkedList.insert(2, 3)); // 0 1 3 4 
console.log(myLinkedList.insert(2, 2)); // 0 1 2 3 4 
