class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addFront(data) {
    let newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
  }

  removeFront() {
    if (this.head === null) {
      console.log("empty linkedlist");
      return;
    }
    let data = this.head.data;
    this.head = this.head.next;
    if (this.head === null) {
      this.tail = null;
    } else {
      this.head.prev = null;
    }
    return data;
  }

  addToEnd(data) {
    let newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }
}

let dll = new DoublyLinkedList();
dll.addToEnd(10);
dll.addToEnd(20);
dll.addFront(50);
dll.addFront(40);

console.log(dll.removeFront());
