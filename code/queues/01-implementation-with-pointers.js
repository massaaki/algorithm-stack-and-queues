class Node {
  constructor (value) {
    this.value = value
    this.next = null
  }
}


class Queue {
  constructor () {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  // se the first element
  peek () {
    return this.first
  }

  // add a node to the last
  enqueue (value) {
    const newNode = new Node(value)

    if (this.isEmpty()) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length++
    return this
  }

  // remove the first element
  dequeue () {
    if (this.isEmpty()) {
      return null
    } else {
      const holdingNode = this.first;
      if (this.first === this.last) {
        this.last = null;
      }
      this.first = this.first.next;
      this.length--;
      return holdingNode;
    }
  }

  isEmpty () {
    return (this.length === 0)
  }

}

const myQueue = new Queue();


// console.log(myQueue.peek())
myQueue.enqueue('anna')
myQueue.enqueue('carlos')
myQueue.enqueue('maria')
console.log(myQueue.peek())
console.log()
console.log('dequeued: ', myQueue.dequeue())
console.log('dequeued: ', myQueue.dequeue())
console.log(myQueue.peek())


// myQueue.dequeue()
// console.log(myQueue.peek())