class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToEnd(data) {
    let newNode = new Node(data);
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    this.tail.next = newNode;
    this.tail = newNode;
  }

  removeFront() {
    if (this.head == null) {
      console.error("cannot remove from empty list");
    }
    let data = this.data;
    this.head = this.head.next;
    return data;
  }

  top() {
    if (this.head !== null) {
      return this.head.data;
    }
  }
}

class Queue {
  constructor() {
    this.queue = new LinkedList();
  }

  enqueue(data) {
    this.queue.addToEnd(data);
  }

  dequeue() {
    return this.queue.removeFront();
  }

  front() {
    return this.queue.top();
  }
}

let q = new Queue();
q.enqueue(90);
q.enqueue(80);
q.enqueue(70);

q.dequeue();

console.log(q.front());
