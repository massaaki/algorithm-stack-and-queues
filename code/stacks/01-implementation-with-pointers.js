class Node {
  constructor (value) {
    this.value = value
    this.next = null
  }
}

class Stack {
  constructor () {
    this.top = null
    this.bottom = null
    this.length = 0
  }


  // see the very top element
  peek () {
    return this.top
  }

  //add to the top
  push (value) {
    const newNode = new Node(value)

    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top
      this.top = newNode
      this.top.next = holdingPointer
    }

    this.length++;
    return this;
  }

  //remove from top
  pop () {
    if (!this.top)
      return null;

    //one line in the list
    if (this.top === this.bottom) {
      this.bottom = null;

    }

    const holdingPointer = this.top;
    this.top = this.top.next;

    this.length--;
    return holdingPointer;

  }
}


const myStack = new Stack();

console.log(myStack.peek());

myStack.push('discord');
myStack.push('google');
myStack.push('facebook');
console.log(myStack.peek());

myStack.pop();
console.log(myStack.peek());

