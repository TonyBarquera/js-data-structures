class MyArray {
  constructor() {
    this.length = 0;
    this.data = {}; // example: { 0: "Tony", 1: "Alan", 2: "Sergio" }
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftIndex(index);
    return item;
  }

  shiftIndex(index) {
    for(let i = index ; i < this.length - 1 ; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;
  }

  unshift(item) {
    if (item) {
      for (let i = this.length; i > 0; i--) {
        this.data[i] = this.data[i - 1];
      }

      this.data[0] = item;
      this.length++;
    }

    return this.length;
  }

  shift(){
    const firstItem = this.data[0];
    for (let i = 0; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;

    return firstItem;
  }
};

const myArray = new MyArray();
myArray.push("Tony");
myArray.push("Alan");
myArray.push("Sergio")
myArray.push("Pedro");

// console.log(myArray.pop());
myArray.delete(1);

console.log(myArray.get(0));
console.log(myArray.get(1));