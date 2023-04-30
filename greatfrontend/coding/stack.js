class Stack {
  constructor() {
    this.items = [];
    this.top = -1;
  }

  push(item) {
    this.top++;
    this.items[this.top] = item;
    return this.items[this.top];
  }

  pop() {
    if(this.isEmpty()) {
      return "Stack empty"
    }
    return this.items[this.top--];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    if(this.isEmpty()) {
      return "Stack empty"
    }
    return this.items[this.top];
  }

  length() {
    if(this.isEmpty()) {
      return 0
    }
    return this.items.length-1;
  }
}

const stack = new Stack();
console.log(stack.isEmpty());
console.log(stack.pop());
console.log(stack.push({a: 'b'}));
console.log(stack.peek());
console.log(stack.push(6));
console.log(stack.push(8));
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.length());
console.log(stack.isEmpty());