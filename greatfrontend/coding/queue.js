class Queue {
    constructor(){
        this.first = -1;
        this.last = -1;
        this.queue = [];
    }
    enqueue = (item) => {
        if(this.isEmpty()) {
            this.first++;
        }
        this.last++;
        this.queue[this.last] = item;
        return this.length();
    }
    dequeue = () => {
        if(!this.isEmpty()) {
            const returnVal = this.queue[this.first];
            if(this.first === this.last) {
                this.first = -1;
                this.last = -1;
            } else {
                this.first++;
            }
            return returnVal;
        }
    }
    isEmpty = () => {
        return this.first === -1 && this.last === -1
    }
    front = () => {
        if(!this.isEmpty()) {
            return this.queue[this.first];
        }
    }
    back = () => {
        if(!this.isEmpty()) {
            return this.queue[this.last];
        }
    }
    length = () => {
        if(!this.isEmpty()) {
            return this.last - this.first + 1;
        } else {
            return 0;
        }
    }
}

const q = new Queue();
console.log(q.length());
console.log(q.enqueue(5));
console.log(q.enqueue(6));
console.log(q.enqueue(4));
console.log(q.dequeue());
console.log(q.length());
console.log(q.dequeue());
console.log(q.length());
console.log(q.dequeue());
console.log(q.length());
console.log(q.front());
console.log(q.back());
console.log(q.enqueue(5));
console.log(q.front());
console.log(q.back());
console.log(q.enqueue(6));
console.log(q.back());
console.log(q.front());