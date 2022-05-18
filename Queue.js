class Queue {
  constructor() {
    this.arr = [];
  }

  enqueue(data) {
    this.arr.push(data);
  }

  dequeue() {
    if (this.isEmpty) {
      console.log("queue is empty");
    }
    this.arr.shift();
  }

  front() {
    return this.arr[0];
  }

  isEmpty() {
    if (this.arr.length === 0) {
      return false;
    }
  }

  display() {
    for (let i = 0; i < this.arr.length; i++) {
      console.log(this.arr[i]);
    }
  }
}

let q = new Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.enqueue(40);

q.display();

q.dequeue();
q.display();
