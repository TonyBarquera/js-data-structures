class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  hashMethod(key) {
    let hash = 0;
    for(let i = 0 ; i < key.length ; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }

    return hash;
  }

  set(key, value) {
    const address = this.hashMethod(key);
    if(!this.data[address]) {
      this.data[address] = [];
    }

    this.data[address].push([key, value]);

    return this.data;
  }

  get(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if(currentBucket) {
      for(let i = 0 ; i < currentBucket.length ; i++) {
        if(currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
  
    return undefined;
  }

  delete(key) {
    let value = undefined;
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          value = currentBucket[i];
          delete currentBucket[i];
          currentBucket.splice(i, 1);
        }
      }
    }

    return value;
  }

  getAllKeys() {
    return this.data.flat(1).map(value => value[0]);
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("Tony", "1990");
myHashTable.set("Alan", "2010");
myHashTable.set("Sergio", "1999");
myHashTable.set("Itzel", "2012");
myHashTable.set("Sher", "2010");
myHashTable.set("Miriam", "2021");

// console.log(myHashTable.get("Miriam"));
// console.log(myHashTable.get("Tony"));
// console.log(myHashTable.get("Itzel"));
// console.log(myHashTable.get("Alan"));

myHashTable.getAllKeys();