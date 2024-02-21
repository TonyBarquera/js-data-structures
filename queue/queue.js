class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if(this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length++;
    return this;
  }

  dequeue() {
    if(this.first !== null) {
      const holdingPointer = this.first.next;
      this.first = holdingPointer;
      this.length--;

      if(holdingPointer === null) {
        this.last = null;
      }
    }

    return this;
  }
}

const queue = new Queue();
console.log(queue.enqueue(1));
console.log(queue.enqueue(2));
console.log(queue.enqueue(3));
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());