const Node = require("./node");

let list = new Node();

class LinkedList {
  constructor() {
    this._head = new Node();
    this._tail = new Node();
    this.length = 0;
  }

  append(data) {
    if (this.length === 0) {
      this._head.data = data;
      this._tail = this._head;
    } else {
      let newNode = new Node(data);
      this._tail.next = newNode;
      newNode.prev = this._tail;
      this._tail = newNode;
    }
    this.length++;
    return this;
  }

  head() {
    return this._head.data;
  }

  tail() {
    return this._tail.data;
  }

  at(index) {
    let node = this._head;
    for (let i = 0; i < index; i++) {
      node = node.next;
    }
    return node.data;
  }

  insertAt(index, data) {
    let node = this._head;
    let newNode = new Node(data);
    if (this.length === 0) {
      this._head.data = data;
      return this;
    }
    for (let i = 0; i < index; i++) {
      node = node.next;
    }
    node.prev.next = newNode;
    newNode.prev = node.prev;
    newNode.next = node;
    node.prev = newNode;
    return this;
  }

  isEmpty() {
    if (this._head.data === null) return true;
    else return false;
  }

  clear() {
    this._head = new Node();
    this._tail = this._head;
    this.length = 0;
    return this;
  }

  deleteAt(index) {
    let node = this._head;

    if (index === 0) {
      node = this._head;
      this._head = this.head.next;
      node = null;
      return this;
    }
    for (let i = 0; i < index; i++) {
      node = node.next;
    }
    node.prev.next = node.next;
    node.next.prev = node.prev;
    node = null;
    return this;
  }

  reverse() {
    let node = this._head;
    let temp;
    while (node !== this._tail) {
      temp = node.next;
      node.next = node.prev;
      node.prev = temp;
      node = node.prev;
    }
    temp = node.next;
    node.next = node.prev;
    node.prev = temp;
    temp = this._tail;
    this._tail = this._head;
    this._head = temp;
    return this;
  }

  indexOf(data) {
    let node = this._head;
    let index = 0;
    while (node !== null) {
      if (node.data === data) return index;
      node = node.next;
      index++;
    }
    return -1;
  }
}

module.exports = LinkedList;
