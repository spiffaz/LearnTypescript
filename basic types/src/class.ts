// Implement a TypeScript class representing a basic queue data structure with methods like enqueue and dequeue.

class Queue<T> {

    // Declare an array to be used to store items in the class
    private items : T[]
    
    constructor(){
        // Initialize empty array
        this.items = []
    }

    // To add to the queue (array)
    enqueue (item: T){
        this.items.push(item)
    }
    
    // Removes an item from the queue
    dequeue () : T | undefined{
        if (this.isEmpty()) {
            return undefined
        }
        return this.items.shift()
    }

    // If empty return true
    isEmpty () : boolean {
        return this.items.length === 0
    }

    size () : number {
        return this.items.length
    }
}

const queue = new Queue();

queue.enqueue(1)
queue.enqueue("90")
queue.enqueue("95")

console.log ("The size of the queue is " + queue.size())
console.log ("Removed " + queue.dequeue())
console.log ("The size of the queue is " + queue.size())